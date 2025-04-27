#!/bin/bash

# Start Flask backend
echo "Starting Flask backend..."
cd /app/server
python3 app.py &

# Start React frontend
echo "Starting React frontend..."
cd /app/client
npm run start

# Wait to prevent container from dying
wait
