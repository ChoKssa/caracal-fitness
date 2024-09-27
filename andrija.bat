@echo off
echo Stopping and removing existing containers...
docker-compose down

echo Removing volumes...
docker volume prune -f

echo Building and starting Docker containers...
docker-compose up -d

REM Wait for Docker to initialize (sleep for 10 seconds)
echo Waiting for Docker to initialize...
timeout /t 10

REM Change directory to backend
cd backend

echo Running Go backend...
go mod tidy
go run .