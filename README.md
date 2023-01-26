# Desafio - Desenvolvedor Backend

## Utilização da API

> link DEPLOY - [ECOMMERCE_WITH_LOGIN](https://ecommerce-with-login-api-node-ts.onrender.com)

## Instruções

- Clonar este repositório (back-end)

- Instalar as bibliotecas (yarn add / npm install)

- Configurar arquivo .env , tendo como modelo o arquivo _.env.exemple_

- Rodar as Migrations (yarn typeorm migration:run -d src/data-source)

- Conectar servidor ao database com o comando _yarn dev_

## Guia Back-End

## _Rota de Usuário_ -> /users

_Rota para criar novo usuário_

- POST

  _{
  "name": "David",
  "email": "dbdev@gmail.com",
  "password": "123aaa",
  "cellphone": "31991970000",
  "address": "Rua das flores"
  }_

- Retorno esperado:

  _{
  "message": "User created with success",
  "user": {
  "id": "c1338406-0b7c-4636-acdd-423c97a1c433",
  "name": "David",
  "email": "dbdev@gmail.com",
  "cellphone": "31991970000",
  "address": "Rua das flores",
  "created_at": "25/01/2023 10:51:02",
  "updated_at": "25/01/2023 10:51:02"
  }_

_Rota de Listagem de todos os produtos de um determinado Usuário_

- GET: /users/products **( NECESSÁRIO AUTENTICAÇÃO )**
- Retorno esperado:

  _[
  {
  "id": "6df92eda-6854-4aa9-aa93-7432a15c406b",
  "productName": "Alexa EchoDot",
  "price": 125.5,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!",
  "created_at": "2023-01-25T01:33:22.140Z",
  "updated_at": "2023-01-25T01:33:22.140Z",
  "user": {
  "id": "f5c6ecf6-5aaf-4918-adbe-083954f421c1",
  "name": "David",
  "email": "dbdev@gmail.com",
  "cellphone": "31991970000",
  "address": "Rua das flores",
  "created_at": "2023-01-25T01:08:53.031Z",
  "updated_at": "2023-01-25T01:08:53.031Z"
  }
  }
  ]_

## _Rota de Login_ -> /login

- POST

_{
"email": "dbdev@gmail.com",
"password": "123aaa"
}_

- Retorno esperado:

  _{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY1YzZlY2Y2LTVhYWYtNDkxOC1hZGJlLTA4Mzk1NGY0MjFjMSIsImlhdCI6MTY3NDY1NDcwMSwiZXhwIjoxNjc0NjYxOTAxLCJzdWIiOiJmNWM2ZWNmNi01YWFmLTQ5MTgtYWRiZS0wODM5NTRmNDIxYzEifQ.ty6m5AjFUEl0eL0_4sSVYR4WVEPLyaOhUmHjuwGV2iY"
  }_

## _Rota de Produto_ -> /products

## _Rota para criar novo produto_

- POST **( NECESSÁRIO AUTENTICAÇÃO )**

  _{
  "productName": "Alexa EchoDot",
  "price": 125.5,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!"
  }_

- Retorno esperado:

  _{
  "message": "Product created with success",
  "product": {
  "productName": "JBL Color",
  "price": 125.5,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!",
  "user": {
  "id": "f5c6ecf6-5aaf-4918-adbe-083954f421c1",
  "name": "David",
  "email": "dbdev@gmail.com",
  "cellphone": "31991970000",
  "address": "Rua das flores",
  "created_at": "2023-01-25T01:08:53.031Z",
  "updated_at": "2023-01-25T01:08:53.031Z"
  },
  "id": "9432206f-6abb-40d7-8222-1a42b43e7b5f",
  "created_at": "24/01/2023 23:11:26",
  "updated_at": "24/01/2023 23:11:26"
  }
  }_

## _Rota de Listagem de todos os produtos_

- GET

- Retorno esperado:

  _[
  {
  "id": "6df92eda-6854-4aa9-aa93-7432a15c406b",
  "productName": "Alexa EchoDot",
  "price": 125.5,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!",
  "created_at": "2023-01-25T01:33:22.140Z",
  "updated_at": "2023-01-25T01:33:22.140Z",
  "user": {
  "id": "f5c6ecf6-5aaf-4918-adbe-083954f421c1",
  "name": "David",
  "email": "dbdev@gmail.com",
  "cellphone": "31991970000",
  "address": "Rua das flores",
  "created_at": "2023-01-25T01:08:53.031Z",
  "updated_at": "2023-01-25T01:08:53.031Z"
  }
  }
  ]_

## _Rota de Listagem de produto por ID_

- GET: /:prodID

- Retorno esperado:

  _{
  "id": "9432206f-6abb-40d7-8222-1a42b43e7b5f",
  "productName": "JBL Color",
  "price": 125.5,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!",
  "created_at": "2023-01-25T02:11:26.787Z",
  "updated_at": "2023-01-25T02:11:26.787Z",
  "user": {
  "id": "f5c6ecf6-5aaf-4918-adbe-083954f421c1",
  "name": "David",
  "email": "dbdev@gmail.com",
  "cellphone": "31991970000",
  "address": "Rua das flores",
  "created_at": "2023-01-25T01:08:53.031Z",
  "updated_at": "2023-01-25T01:08:53.031Z"
  }
  }_

## _Rota de editar um produto por ID_

- PATCH: /:prodID **( NECESSÁRIO AUTENTICAÇÃO )**

  _{
  "productName": "JBL EDIT",
  "price": 284.57,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!"
  }_

- Retorno esperado:

  _{
  "message": "Product Updated",
  "product": {
  "id": "9432206f-6abb-40d7-8222-1a42b43e7b5f",
  "productName": "JBL EDIT",
  "price": 284.57,
  "description": "Produto essencial para tornar a sua casa mais tecnológica e divertida!",
  "created_at": "2023-01-25T02:11:26.787Z",
  "updated_at": "2023-01-25T02:26:42.947Z",
  "user": {
  "id": "f5c6ecf6-5aaf-4918-adbe-083954f421c1",
  "name": "David",
  "email": "dbdev@gmail.com",
  "cellphone": "31991970000",
  "address": "Rua das flores",
  "created_at": "2023-01-25T01:08:53.031Z",
  "updated_at": "2023-01-25T01:08:53.031Z"
  }
  }
  }_

_Rota de deletar um produto por ID_

- DELETE: /:prodID **( NECESSÁRIO AUTENTICAÇÃO )**

- Retorno esperado:

  _{
  "message": "Product deleted with success"
  }_

**Observações:**

> - Produtos com dados persistidos em memoria, utilizando TypeORM e Postgres;

> - Tanto o produto quanto o usuário tem um identificador único

> - Usuário e produtos possuem relacionamento de um para vários, ou seja, um mesmo usuário pode ter varias produtos mas um produto pertence a apenas um usuário.

# Teste Tecnico - Desenvolvedor Backend
