# ---- Stage 1: Build Next.js app ----
	FROM node:18-alpine AS frontend-builder
	WORKDIR /app/client
	COPY client/ ./
	RUN npm install && npm run build
	
	# ---- Stage 2: Backend + Frontend ----
	FROM python:3.10-slim
	
	# Create app directories
	WORKDIR /app
	
	# --- Copy Backend ---
	COPY server/ ./server
	RUN pip install --no-cache-dir -r server/requirements.txt
	
	# --- Copy Frontend (static output from builder) ---
	COPY --from=frontend-builder /app/client /app/client
	
	# Expose ports: 3000 for frontend, 5000 for backend
	EXPOSE 3000 5000
	
	# Start both servers
	CMD ["bash", "-c", "cd client && npm run start & cd ../server && python app.py"]
	