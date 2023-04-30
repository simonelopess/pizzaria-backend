FROM node:10

WORKDIR /usr/src/app
ENV PORT 8080:8080

EXPOSE 8080

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build:prod

CMD ["npm", "run", "start"]
