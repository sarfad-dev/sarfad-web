from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timezone
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS, WriteOptions
import json
import os

# Load environment variables
INFLUXDB_URL = os.getenv("INFLUXDB_URL")
INFLUXDB_TOKEN = os.getenv("INFLUXDB_TOKEN")
INFLUXDB_ORG = os.getenv("INFLUXDB_ORG")
INFLUXDB_BUCKET = os.getenv("INFLUXDB_BUCKET")

# InfluxDB setup
client = InfluxDBClient(url=INFLUXDB_URL, token=INFLUXDB_TOKEN)
write_api = client.write_api(write_options=WriteOptions(
    batch_size=15,
    flush_interval=1000, 
    jitter_interval=200,   
    retry_interval=5000
))

query_api = client.query_api()

# Flask app
app = Flask(__name__)
CORS(app)

@app.route('/sensor-data', methods=['POST'])
def receive_data():
    try:
        data = json.loads(request.get_data())
        required_fields = [
            "id", "time", "temperature", "humidity", "pressure",
            "latitude", "longitude", "altitude", "velocity", 
            "current", "voltage", "snr", "rssi"
        ]
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing data fields"}), 400

        timestamp_app = datetime.now(timezone.utc).isoformat()

        voltage = float(data["voltage"])
        battery_percent = (voltage - 3.0) / (4.2 - 3.0) * 100
        #battery_percent = max(0, min(100, battery_percent))  # clamp

        pressure = float(data["pressure"])
        raw_altitude = 44330 * (1.0 - (pressure / 1013.25) ** (1 / 5.255))
        altitude_from_pressure = max(0, min(1000, raw_altitude))
        point = Point("cansat_readings") \
            .tag("device", "ESP32-CANSAT") \
            .field("id", int(data["id"])) \
            .field("time", data["time"]) \
            .field("temperature", float(data["temperature"])) \
            .field("humidity", float(data["humidity"])) \
            .field("pressure", pressure) \
            .field("altitude_pressure", altitude_from_pressure) \
            .field("latitude", float(data["latitude"])) \
            .field("longitude", float(data["longitude"])) \
            .field("altitude", float(data["altitude"])) \
            .field("velocity", float(data["velocity"])) \
            .field("battery", battery_percent) \
            .field("current", float(data["current"])) \
            .field("voltage", voltage) \
            .field("snr", float(data["snr"])) \
            .field("rssi", int(data["rssi"])) \
            .time(timestamp_app)

        write_api.write(bucket=INFLUXDB_BUCKET, org=INFLUXDB_ORG, record=point)

        return jsonify({"status": "success"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/sensor-data/latest', methods=['GET'])
def get_latest_sensor_data():
    try:
        query = f'''
        from(bucket: "{INFLUXDB_BUCKET}")
            |> range(start: -1m)
            |> filter(fn: (r) => r._measurement == "cansat_readings")
            |> last()
        '''
        result = query_api.query(org=INFLUXDB_ORG, query=query)

        response = {}
        for table in result:
            for record in table.records:
                field = record.get_field()
                response[field] = record.get_value()

        if not response:
            return jsonify({"error": "No data available"}), 404

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
