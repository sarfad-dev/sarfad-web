# SARFAD Server (Backend)

This is the backend service for the SARFAD project. It receives telemetry data from an ESP32 microcontroller and writes it into InfluxDB for real-time visualization and analysis.

## Features

- Receives telemetry data from ESP32 via HTTP POST
- Stores structured sensor data (temperature, pressure, etc.) in InfluxDB
- REST API endpoints to serve frontend with queried telemetry
- Modular design with separate database logic

## Technologies

- Python 3
- Flask
- InfluxDB v2 (time-series database)
- dotenv for environment config

## Setup

```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

- Create a .env file in the root of the repository

```bash
INFLUX_URL=http://localhost:8086
INFLUX_TOKEN=your-token-here
INFLUX_ORG=your-org
INFLUX_BUCKET=your-bucket

- Run the flask server

```bash
python app.py