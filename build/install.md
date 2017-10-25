##without docker 

###Update package database

    apt-get update

###Upgrade

    apt-get upgrade
  
###Install Nodejs : 
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps

###First install nvm

    curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash

###Update profil vars

source ~/.profile

###Install git to be able to get node versions

    apt-get install git

###Install node version 8.7.0

    nvm install v8.7.0

###Confirm version

    node --version

###Confirm path

    which node

###Install unoconv

	apt-get install unoconv

###Install Nginx

    apt-get install nginx

###copy config files 

    cp bashrc ~/.bashrc
    cp nginx.default /etc/nginx/sites-enabled/default
    cp pdfconv.conf /etc/init/pdfconv.conf
    cp unoconv.conf /etc/init/unoconv.conf

###install project dependencies

    cd ../
    nmp install

###Run services

    strat unoconv
    start pdfconv
    nginx -s reload


*If need reconfigure some params please refer to config-folder/index.js*