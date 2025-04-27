# ---- Base image with both Node and Python ----
	FROM node:18-bullseye-slim as base

	# Install Python and pip
	RUN apt-get update && apt-get install -y python3 python3-pip
	
	WORKDIR /app
	
	# ---- Build Frontend ----
	FROM base as builder
	
	WORKDIR /app/client
	COPY client/package*.json ./
	RUN npm install
	COPY client/ .
	RUN npm run build
	
	# ---- Final Image ----
	FROM base as final
	
	WORKDIR /app
	
	# Copy backend
	COPY server/ ./server
	RUN pip3 install --no-cache-dir -r server/requirements.txt
	
	# Copy built frontend
	COPY --from=builder /app/client /app/client
	
	# Copy startup script
	COPY start.sh /app/start.sh
	RUN chmod +x /app/start.sh
	
	# Expose ports
	EXPOSE 3000 5000
	
	# Start the application
	CMD ["/app/start.sh"]
	