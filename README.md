# Run App

## Build Backend

```shell
docker build -f ./server/Dockerfile -t kiosco-backend server
```

## Build Database 

```shell
docker build -f ./database/Dockerfile -t kiosco-db database
```

## Build Frontend

```shell
docker build -f ./client/Dockerfile  -t kiosco-frontend client
```

## Run App with docker compose

```shell
docker-compose up -d
```

## Down containers

```shell
docker-compose down
```