# SARFAD Web 2025

Welcome to the SARFAD Web repository! This project represents the public face of the SARFAD CanSat team — a group of high school students participating in the European Space Agency's CanSat competition. The website combines team presentation, educational outreach, and a live telemetry dashboard for real-time CanSat data.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [License](#license)

## Overview

This website serves two main purposes:

1. **Team & Project Presentation**
   - Introduction of the SARFAD team
   - Explanation of the CanSat project and its goals
   - Mission showcase (sensors, communication, PCB, parachute, camera, etc.)
   - Sponsor acknowledgments and public outreach

2. **Live Telemetry Dashboard**
   - Live-updating charts for temperature, humidity, pressure, battery voltage, calculated/measured altitude, current, and speed
   - Real-time location tracking on an interactive map
   - Export of location data to Google Maps / Mapy.cz
   - Modular and reusable dashboard components

## Project Structure

```bash
sarfad/
├── client/             # React frontend for team site and live dashboard
│   ├── public/
│   ├── src/
│   │   ├── components/ # Reusable UI components, ChartDashboard, Carousel, etc.
│   │   ├── pages/      # Next.js routing
│   │   └── App.jsx
│   └── package.json
├── server/             # Flask backend receiving HTTP data from ESP32
│   ├── app.py          # Main Flask app
│   ├── influx.py       # InfluxDB communication logic
│   ├── .env            # Environment config (credentials, DB URL, etc.)
│   └── requirements.txt
├── README.md           # Project documentation (you are here)
└── LICENSE             # License info
```

## Technologies Used

- **Ran by**
    - Docker
- **Frontend**:
    - React
    - Tailwind CSS
    - Recharts / Chart.js
    - Leaflet.js (for mapping)
- **Backend**:
    - Flask (Python)
    - InfluxDB (for time-series data storage)
- **Hardware**:
    - ESP32 receiving live data instantaneously from the CanSat

## Contributors

- [Daniel Tomis](https://github.com/tomisdaniel)
- [Jakub Holub](https://github.com/henypotter)

## License

This project is licensed under the [MIT License](LICENSE).
