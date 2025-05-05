from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timezone
from influxdb_client import InfluxDBClient, Point
import os

# Load environment variables
INFLUXDB_URL = os.getenv("INFLUXDB_URL")
INFLUXDB_TOKEN = os.getenv("INFLUXDB_TOKEN")
INFLUXDB_ORG = os.getenv("INFLUXDB_ORG")
INFLUXDB_BUCKET = os.getenv("INFLUXDB_BUCKET")

# InfluxDB setup
client = InfluxDBClient(url=INFLUXDB_URL, token=INFLUXDB_TOKEN)
write_api = client.write_api()
query_api = client.query_api()

# Flask app
app = Flask(__name__)
CORS(app)

@app.route('/sensor-data', methods=['POST'])
def receive_data():
    try:
        data = request.json
        required_fields = ["id", "time", "temperature", "humidity", "pressure", "latitude", "longitude", "altitude"]
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing data fields"}), 400

        timestamp = datetime.now(timezone.utc).isoformat()

        point = Point("cansat_readings") \
            .tag("device", "ESP32-CANSAT") \
            .field("id", int(data["id"])) \
            .field("temperature", float(data["temperature"])) \
            .field("humidity", float(data["humidity"])) \
            .field("pressure", float(data["pressure"])) \
            .field("latitude", float(data["latitude"])) \
            .field("longitude", float(data["longitude"])) \
            .field("altitude", float(data["altitude"])) \
            .time(timestamp)

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
    app.run(host='0.0.0.0', port=5000, debug=True)
