FROM node

WORKDIR /app

COPY FRONT/package.json /app

COPY ./FRONT /app