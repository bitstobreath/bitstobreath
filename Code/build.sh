#!/bin/bash
#
# Details: install nodejs and npm

if [[ ! -f /usr/bin/zsh ]]; then
    sudo apt install zsh
fi

if [[ ! -f /usr/local/bin/node ]]; then
    sudo apt install nodejs
fi

if [[ ! -f /usr/local/bin/npm ]]; then
    sudo apt install npm
fi

sudo npm install --global yarn

yarn install

yarn build

rm yarn.lock
