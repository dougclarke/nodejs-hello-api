# Hello API

A simple containerized NodeJS based API with Sqlite3

## Required

- docker-ce
- docker-ce-cli
- docker-compose
- containerd.io

## Download, Build, Test, Run

`$ git clone https://github.com/dougclarke/nodejs-hello-api.git
$ cd app
$ docker-compose build
$ docker-compose run test
$ docker-compose up api`

# Usage

`curl 'http://localhost:9000/hello'`
`curl 'http://localhost:9000/hello?name=Doug'`

# Using Vagrant

`$ git clone https://github.com/dougclarke/nodejs-hello-api.git
$ cd nodejs-hello-api
$ vagrant up
$ vagrant ssh
$ cd app
$ docker-compose build
$ docker-compose run test
$ docker-compose up api`
