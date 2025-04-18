from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timezone
from influxdb_client import InfluxDBClient, Point
import os

# Load env vars
INFLUXDB_URL = os.getenv("INFLUXDB_URL", "http://127.0.0.1:8086")
INFLUXDB_TOKEN = os.getenv("INFLUXDB_TOKEN")
INFLUXDB_ORG = os.getenv("INFLUXDB_ORG", "your-org-id")
INFLUXDB_BUCKET = os.getenv("INFLUXDB_BUCKET", "mock")

# Connect to InfluxDB
client = InfluxDBClient(url=INFLUXDB_URL, token=INFLUXDB_TOKEN)
write_api = client.write_api()
query_api = client.query_api()

# Create Flask app
app = Flask(__name__)
CORS(app)

@app.route('/sensor-data', methods=['POST'])
def receive_data():
    try:
        data = request.json
        required_fields = ["oxygen", "carbonDioxide", "uvIndex", "pressure", "humidity", "temperature"]
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing data fields"}), 400

        timestamp = datetime.now(timezone.utc).isoformat()

        point = Point("sensor_readings") \
            .tag("device", "ESP32") \
            .field("oxygen", data["oxygen"]) \
            .field("carbonDioxide", data["carbonDioxide"]) \
            .field("uvIndex", data["uvIndex"]) \
            .field("pressure", data["pressure"]) \
            .field("humidity", data["humidity"]) \
            .field("temperature", data["temperature"]) \
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
			|> range(start: -10s)
			|> filter(fn: (r) => r._measurement == "sensor_readings")
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
