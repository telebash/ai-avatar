FROM node:18.19.1-slim

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start"]

EXPOSE 3000
