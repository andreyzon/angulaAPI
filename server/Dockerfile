# build stage
FROM node:lts-alpine as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["src/package.json", "src/package-lock.json", "/usr/src/"]
RUN npm install --only=production
COPY . .
EXPOSE 3000
RUN npm start