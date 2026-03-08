FROM node:alpine3.23

WORKDIR /microFrontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host" ]
