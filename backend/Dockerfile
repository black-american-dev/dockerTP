FROM node:alpine3.23

WORKDIR /microBackend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node","server.js" ]
