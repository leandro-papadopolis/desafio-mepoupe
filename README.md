## Descrição
Projeto para o processo seletivo das empresas <b>Me Poupe</b> e <b>FCamara</b>.
Consiste em dois endpoints, "calcula média" e "consulta cep".

Os requisitos foram:
 - Typescript
 - Docker
 - Validação de parâmetros
 - Tratamento de erros
 - Logger
 - Testing
 - Princípio de responsabilidade única (SRP/SOLID)

 Devido a ausência de restrições ou recomendações de bibliotecas, nesse projeto são utilizadas as seguintes:
 - Nest.js
 - - axios
 - - swagger
 - class-validator/class-transformer
 - rxjs
 - jest

## Observação
`página do Swagger com lista de endpoints na raiz` [http://localhost:3000/](http://localhost:3000/)

## Instalação - Docker
```bash
# gerar imagem
$ docker build -t desafio-me-poupe .

# rodar imagem em container 
$ docker run -p 3000:3000 desafio-me-poupe
```

## Instalação - Local

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
