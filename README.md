PROJECT TABLES

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
