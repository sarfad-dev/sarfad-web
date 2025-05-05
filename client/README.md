# SARFAD Client (Frontend)

This is the frontend of the SARFAD web application. It is built with React and Next.js and includes both the presentation of our CanSat team and a live telemetry dashboard for real-time data visualization.

## Features

- Landing page with sections:
  - What is CanSat?
  - What our CanSat can do
  - Meet the team
  - Live telemetry dashboard
  - Our sponsors
- Real-time data visualizations (charts, maps)
- Reusable and modular dashboard components
- Carousel with mission highlights
- Map integration with export links to Google Maps / Mapy.cz

## Technologies

- React (Next.js)
- Tailwind CSS
- Chakra UI
- Charts.js (charts)
- Leaflet.js (maps)
- Dynamic components via `next/dynamic`

## Setup

```bash
cd client
npm install
npm run dev
- Frontend runs by default at http://localhost:3000
```