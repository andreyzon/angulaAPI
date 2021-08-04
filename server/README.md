# Titin Shop Server

Backend desarrollado en express JS con una arquitectura mvc divida en carpetas según la entidad o operacioones. 

## Manage database development environment
- Init database
```
sudo service mysqlql restart
```

- Create database
```
npx sequelize-cli db:create
```
- Delete database
```
npx sequelize-cli db:drop
```
- Create new model
```
npx sequelize-cli model:generate --name Application --attributes name:string,description:string
```
- Migrate database
```
npx sequelize-cli db:migrate
```
- Rollback migration
```
npx sequelize-cli db:migrate:undo
```
- Rollback all migration
```
npx sequelize-cli db:migrate:undo:all
```
- Create roles and basic permission
```
npx sequelize-cli db:seed:all
```

## Manage database production environment
- Define version image
```
ARTIFACT_ID=1.0
```
- Update Migrate database
```
docker run --rm --name titin-shop-server-container -v $(pwd):/usr/src/app titin-shop-server:$ARTIFACT_ID npx sequelize-cli db:migrate
```

- Rollback migrations.
```
docker run --rm --name titin-shop-server-container -v $(pwd):/usr/src/app titin-shop-server:$ARTIFACT_ID npx sequelize-cli db:migrate:undo:all
```

## Deploy manual
- Define version image
```
ARTIFACT_ID=1.0
```
- Debugging project
```
docker run --rm -p 3333:3000 --name titin-shop-server-container -v $(pwd):/usr/src/app titin-shop-server:$ARTIFACT_ID
```
- Deploy docker simple
```
docker run --rm -d -p 3333:3000 --name titin-shop-server-container -v $(pwd):/usr/src/app titin-shop-server:$ARTIFACT_ID
```
- Deploy docker compose
```
env TAG=$ARTIFACT_ID docker-compose -f ./server/docker-compose.yml up -d
```
- Deploy with docker swarm
```
env TAG=$ARTIFACT_ID docker stack deploy -c ./server/stack.yml titin-shop-server
```


## Automatization project
### Pre config server automatization
- Install aws cli for ecr
```
sudo apt  install awscli
```
- Login in aws cli
```
sudo su jenkins
aws configure
```
- Create ssh key 
```
sudo su jenkins
ssh-keygen -t rsa -b 4096
cat .ssh/id_rsa
```
* Copy ssh public key
### Pre config server production
- Install aws cli for ecr
```
sudo apt  install awscli
```
- Install dependencies by use jenkins
```
sudo apt-get install openjdk-8-jdk wget gnupg git
```
- Create folder by deploys
```
sudo mkdir /var/jenkins
```
- Create user jenkins
```
sudo adduser jenkins
```
- Permission for user jenkins in folder by deploys
```
sudo chown jenkins:jenkins /var/jenkins
```
- Permission for use docker by user jenkins
```
sudo usermod -aG docker jenkins
```
- Config connection ssh user jenkins
```
sudo su jenkins
mkdir .ssh
nano .ssh/authorized_keys
``` 
* Paste ssh public key
- Config aws in user jenkins
```
aws configure
```
* Paste Secret Id and Secret key
