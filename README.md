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

## Run SQL interface
```shell
docker run --net mysql_db  -p 8080:8080 adminer
```
 - Server: kiosco-db-container
 - User: root
 - Password: pass1234
 - Database: data_base_kiosco
