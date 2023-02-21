FROM node:18.14.0

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY . .

RUN npm install

RUN npm i -g prisma

EXPOSE 3000

CMD [ "node", "index.js" ]