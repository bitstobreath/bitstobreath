#!/bin/bash
#
# Details: install nodejs and npm

sudo apt install nodejs
sudo apt install npm

sudo npm install --global yarn

yarn install

yarn build
