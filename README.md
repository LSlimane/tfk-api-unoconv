[![Build Status](https://travis-ci.org/zrrrzzt/tfk-api-unoconv.svg?branch=master)](https://travis-ci.org/zrrrzzt/tfk-api-unoconv)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# Using Docker

Unoconv as a webservice

## Docker

Build image

```bash
$ docker build -t unoconv-webservice .
```

Run image

```bash
$ docker run -d -p 80:3000 --name unoconv-webservice unoconv-webservice
```

## Usage

Post the file you want to convert to the server and get the converted file in return.

See all possible conversions on the [unoconv website](http://dag.wiee.rs/home-made/unoconv/).

API for the webservice is /unoconv/{format-to-convert-to} so a docx to pdf would be

```bash
$ curl --form file=@myfile.docx http://localhost/unoconv/pdf > myfile.pdf
```

### Formats

To see all possible formats for convertion visit ```/unoconv/formats```

To see formats for a given type ```/unoconv/formats/{document|graphics|presentation|spreadsheet}```

### Versions

To see all versions of installed dependencies lookup ```/unoconv/versions```

## Environment

You can change the webservice port and filesize-limit by changing environment variables.

SERVER_PORT default is 3000

PAYLOAD_MAX_SIZE default is 1048576 (1 MB)

TIMEOUT_SERVER default is 2 minutes (120 000 milliseconds)

TIMEOUT_SOCKET default is 2 minutes (120 000 milliseconds)

UPLOADS_FOLDER default is ```~/uploads/```

Change it in the Dockerfile or create an env-file and load it at containerstart

```bash
$ docker run --env-file=docker.env -d -p 80:3000 --name unoconv-webservice unoconv-webservice
```

# Without docker 

### Update package database

    apt-get update

### Upgrade

    apt-get upgrade
  
### Install Nodejs : 
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps

### First install nvm

    curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash

### Update profil vars

source ~/.profile

### Install git to be able to get node versions

    apt-get install git

### Install node version 8.7.0

    nvm install v8.7.0

### Confirm version

    node --version

### Confirm path

    which node

### Install Nginx

    apt-get install nginx

###Install unoconv

	apt-get install unoconv
	
### copy config files 

    cp bashrc ~/.bashrc
    cp nginx.default /etc/nginx/sites-enabled/default
    cp pdfconv.conf /etc/init/pdfconv.conf
    cp unoconv.conf /etc/init/unoconv.conf

### install project dependencies

    cd ../
    nmp install

### Run services

    strat unoconv
    start pdfconv
    nginx -s reload


*If need reconfigure some params please refer to config-folder/index.js*

## License

[MIT](LICENSE)

![tfk-api-unoconv](https://robots.kebabstudios.party/tfk-api-unoconv.png "Robohash image of tfk-api-unoconv")
