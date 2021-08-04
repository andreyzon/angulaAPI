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

## Create Volume
```
docker volume create --name db_data
```

## Create Network
```
docker network create mysql_db
```

## Run Database docker

```
docker run -d --name kiosco-db-container -e MYSQL_ROOT_PASSWORD=pass1234 -e MYSQL_DATABASE=db_kiosco -e MYSQL_USER=kiosco -e MYSQL_PASSWORD=pass1234 -v db_data:/var/lib/mysql --net mysql_db kiosco-db
```

## Run App with docker compose

```shell
docker-compose up -d
```

## Down containers

```shell
docker-compose down
```