docker build -f ./server/Dockerfile -t kiosco-backend server
docker build -f ./database/Dockerfile -t kiosco-db database
docker build -f ./client/Dockerfile  -t kiosco-frontend client
# docker-compose up -d