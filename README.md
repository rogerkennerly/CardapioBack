
# Cardapio Online - Back-end com Node.js

O sistema se trata de um cardapio online com produtos separados por categorias, o usuário cadastrado poderá favoritar produtos ou adiciona-los ao seu pedido.


## Instalação

Você precisará do Node.js instalado no seu computador para roder essa aplicação.

```bash
  git clone https://github.com/rogerkennerly/CardapioBack
  cd CardapioBack
  npm install
  npm run dev
```
Roda o projeto em modo dev.
## Documentação da API


### Users

#### Cadastra um novo usuário

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuário. |
| `email`      | `string` | **Obrigatório**. E-mail usado para acessar o sistema. |
| `password`      | `string` | **Obrigatório**. Senha usada para acessar o sistema. |

#### Alterar um usuário existente (**Bearer Token obrigatório**)

```http
  PUT /users
```


| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuário. |
| `email`      | `string` | **Obrigatório**. E-mail usado para acessar o sistema. |
| `password`      | `string` | Senha atual do usuário. |
| `old_password`      | `string` | Nova senha a ser alterada. |

### Category
#### Retorna todos os itens

```http
  GET /category
```

#### Retorna um item

```http
  GET /category/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do item que você quer |

#### Cadastra uma nova categoria

```http
  POST /category
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome da categoria a ser cadastrada. |

#### Altera o nome de uma categoria existente

```http
  PUT /category
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item a ser alterado |
| `name`      | `string` | **Obrigatório**. Novo nome da categoria a ser alterada. |


#### Remove uma categoria existente

```http
  DEL /category/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID da categoria a ser removida. |



### Products
#### Retorna todos os itens

```http
  GET /products
```

#### Retorna um item

```http
  GET /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do item que você quer |

#### Cadastra um novo produto (**Bearer Token obrigatório**)
```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do produto a ser cadastrado. |
| `category_id`      | `integer` | **Obrigatório**. Id da categoria do produto. |
| `price`      | `float` | **Obrigatório**. Valor do produto. |
| `description`      | `string` | **Obrigatório**. Descrição do produto. |
| `ingredients`      | `string` | **Obrigatório**. Ingredients do produto (separados por virgula). |
| `img`      | `file` | Imagem do produto. |

#### Altera um produto existente (**Bearer Token obrigatório**)
```http
  PATCH /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | Nome do produto a ser cadastrado. |
| `category_id`      | `integer` | Id da categoria do produto. |
| `price`      | `float` | Valor do produto. |
| `description`      | `string` | Descrição do produto. |
| `ingredients`      | `string` | Ingredients do produto (separados por virgula). |
| `img`      | `file` | Imagem do produto. |

#### Remove um  produto existente (**Bearer Token obrigatório**)
```http
  PATCH /products/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do item que você quer |

### Ingredients

#### Retorna todos os itens

```http
  GET /ingredients
```

#### Retorna um item

```http
  GET /ingredients/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do item que você quer |


## Screenshots

![App Screenshot](https://i.imgur.com/3Z4LgLW.jpeg)

![App Screenshot](https://i.imgur.com/qHURul6.jpeg)

![App Screenshot](https://i.imgur.com/ZIlFksk.jpeg)

![App Screenshot](https://i.imgur.com/lchclQ9.jpeg)

![App Screenshot](https://i.imgur.com/CbJriGR.jpeg)

![App Screenshot](https://i.imgur.com/xV4UEdb.jpeg)


## Referência

 - [Explorer Rocketseat](https://rocketseat.com.br)


## Autores

- [@rogerkennerly](https://www.github.com/rogerkennerly)

