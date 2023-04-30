FROM postgres:14.2-alpine

WORKDIR /usr/src/app
ENV PORT 5432:5432
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB pizza
EXPOSE 5432

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build:prod

CMD ["npm", "run", "start"]
