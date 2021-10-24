# not ubuntu-latest! but ubuntu:latest!
FROM ubuntu
FROM node

# user permission
# RUN chown -R node:node /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# install app dependencies https://stackoverflow.com/questions/42040317/cannot-find-module-for-a-node-js-app-running-in-a-docker-compose-environment
# https://stackoverflow.com/questions/30256386/how-to-copy-multiple-files-in-one-layer-using-a-dockerfile
COPY package.json yarn.lock ./

# https://stackoverflow.com/questions/52630404/how-to-install-packages-based-on-the-lock-file-with-yarn
RUN yarn install --frozen-lockfile
RUN yarn global add nodemon

# bundle app source
COPY . .
CMD yarn start:dev
