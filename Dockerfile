FROM node:16-alpine3.12
LABEL \
  maintainer="Doug Clarke" \
  description="A simple NodeJS API server"
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
