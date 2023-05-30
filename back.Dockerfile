FROM node

WORKDIR /app

COPY BACK/package.json /app

RUN npm install

COPY . /app
