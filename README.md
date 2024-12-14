# Biblioteca Node com MongoDB

API RESTful desenvolvida para gerenciar uma livraria, permitindo a manipulação de dados de livros e autores através de operações CRUD. A API foi construída com Node.js, Express e MongoDB.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Explicação](#explicação)
- [Documentação da API](#documentação-da-api)
- [Autor](#autor)

<br>
---

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/js.png" alt="Logo JavaScript" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/node.png" alt="Logo Node.js" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/mongodb.png" alt="Logo MongoDB" width="100"/>
  </div>
</div>

---

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

---

## Descrição

API criada para gerenciamento de livros e autores em uma livraria. Os dados são armazenados em um banco de dados MongoDB, e a API utiliza Express para o gerenciamento de rotas. Todas as operações incluem validação de dados e testes automatizados para garantir a funcionalidade e segurança.

---

## Funcionalidades

- **Livros:**

  - Listar todos os livros.
  - Obter detalhes de um livro pelo ID.
  - Adicionar um novo livro.
  - Atualizar informações de um livro existente.
  - Excluir um livro.
  - Listar livros de um autor específico.

- **Autores:**
  - Listar todos os autores.
  - Obter detalhes de um autor pelo ID.
  - Adicionar um novo autor.
  - Atualizar informações de um autor existente.
  - Excluir um autor.

---

## Explicação

A API segue uma estrutura modular organizada com as seguintes responsabilidades:

- **Rotas:** Recebem as requisições e encaminham ao controlador correspondente.
- **Controladores:** Processam a lógica de negócios e interagem com os modelos.
- **Modelos:** Representam os esquemas de dados no MongoDB.
- **Banco de Dados:** MongoDB para armazenamento persistente.
- **Validação:** Joi é usado para validação de dados de entrada.
- **Segurança:** Helmet e CORS para proteção contra vulnerabilidades e controle de acessos.

---

## Documentação da API

### **Endpoints**

#### **Livros**

- **`GET /livros`**  
  Retorna todos os livros cadastrados.

- **`GET /livros/:id`**  
  Retorna um livro pelo ID.

- **`POST /livros`**  
   Adiciona um novo livro.  
   **Body:**
  ```json
  {
    "id": 1,
    "titulo": "Nome do Livro",
    "autorId": 1,
    "preco": 49.99,
    "anoPublicacao": 2020
  }
  ```
- **`PUT /livros/:id`**
  Atualiza um livro pelo ID.

**Body:**

```json
{
  "titulo": "Novo Título",
  "preco": 59.99
}
```

- **`DELETE /livros/:id`**
  Remove um livro pelo ID.

## Autor

Desenvolvido por Diego Franco.
<!-- 
Rotas são os garçons: Eles recebem os pedidos dos clientes (requisições) e levam para a cozinha (controller).
Controller é a cozinha: Ele prepara o pedido, pegando os ingredientes no estoque (model).
Model é o estoque: Ele pega os dados do banco de dados, como pegar ingredientes no depósito.
Resposta: O garçom (rota) entrega o pedido pronto (dados) para o cliente.
Cada um tem sua função e todos trabalham juntos para que o cliente receba o que pediu!

As rotas (ex.: routes/livros.js): Recebem as requisições dos clientes (ex.: GET /livros) e as encaminham para o controller.
O controller (ex.: controllers/LivroController.js): Processa a lógica do pedido e consulta o banco de dados através do model.
O model (ex.: models/Livro.js): Interage diretamente com o banco de dados, pegando ou salvando as informações necessárias.
Resposta (rota): A rota devolve os dados processados pelo controller para o cliente.
Cada arquivo tem sua responsabilidade, e juntos fazem a API funcionar corretamente! -->
