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


## Run Database docker mysql

```
docker run -d --name kiosco-db-container -e MYSQL_ROOT_PASSWORD=pass1234 -e MYSQL_DATABASE=db_kiosco -e MYSQL_USER=kiosco -e MYSQL_PASSWORD=pass1234 -v db_data:/var/lib/mysql --net mysql_db -p 3306:3306 mysql
```

## Run Database docker own image

```
docker run -d --name kiosco-db-container -e MYSQL_ROOT_PASSWORD=pass1234 -e MYSQL_DATABASE=db_kiosco -e MYSQL_USER=kiosco -e MYSQL_PASSWORD=pass1234 -v db_data:/var/lib/mysql --net mysql_db kiosco-db
```

## Run Backend docker
```
docker run --name kiosco-backend-container -e NODE_ENV=production --net mysql_db -p 3000:3000 -d kiosco-backend
```

- Create database
```
docker run --rm --name kiosco-backend-container -e NODE_ENV=production --net mysql_db kiosco-backend npx sequelize-cli db:create
```

- Migrate database
```
docker run --rm --name kiosco-backend-container -e NODE_ENV=production --net mysql_db kiosco-backend npx sequelize-cli db:migrate
```
- Seed database
```
docker run --rm --name kiosco-backend-container -e NODE_ENV=production --net mysql_db kiosco-backend npx sequelize-cli db:seed:all
```

## Run Frontend docker
```
docker run --name kiosco-frontend-container -p 4000:80 -d kiosco-frontend
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

## SQL Queries

```sql

```


# PM2 Run

```shell
pm2 start server/src/index.js --name "backend"
pm2 start build/index.js --name "frontend"
```