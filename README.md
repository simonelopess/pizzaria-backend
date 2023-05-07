# Backend - Pizzaria Project

### This repo is the backend from a pizza project.

Technologies:

- Node JS with Express
- Postgres as Database
- Docker
- Prisma client as ORM
- Cors controll access
- Multer to image
- JSON WEb Token to Auth
- Bcrypt to crypto sensitive data

### Install dependences

`npm install` or `yarn install`

### Run the project

`npm run dev` or `yarn dev`

### Below the database entities

USER

- id String- UUID
- name String
- email String
- password String
- created_at Datetime
- updated_at Datetime

CATEGORY

- id String- UUID
- name String
- created_at Datetime
- updated_at Datetime

PRODUCT

- id String- UUID
- name String
- price String
- description String
- banner String
- category (FK)
- created_at Datetime
- updated_at Datetime

ORDER

- id String- UUID
- table INT
- Status Boolean
- draft Boolean
- name? String

ITEM

- id String- UUID
- amount INT
- order_ID (FK)
- product_ID (FK)
