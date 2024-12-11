import request from "supertest";
import app from "../app.js";

describe("Testes das rotas de livros", () => {
  it("Deve retornar todos os livros", async () => {
    const res = await request(app).get("/livros");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Deve adicionar um novo livro", async () => {
    const novoLivro = {
      id: 3,
      titulo: "Novo Livro",
      autor: "Autor Teste",
      preco: 49.99,
    };
    const res = await request(app).post("/livros").send(novoLivro);
    expect(res.statusCode).toBe(201);
    expect(res.body.titulo).toBe(novoLivro.titulo);
  });

  it("Deve retornar um livro pelo ID", async () => {
    const res = await request(app).get("/livros/3");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(3);
  });

  it("Deve atualizar um livro pelo ID", async () => {
    const atualizacao = {
      titulo: "Livro Atualizado",
      preco: 59.99,
    };
    const res = await request(app).put("/livros/3").send(atualizacao);
    expect(res.statusCode).toBe(200);
    expect(res.body.titulo).toBe(atualizacao.titulo);
  });

  it("Deve deletar um livro pelo ID", async () => {
    const res = await request(app).delete("/livros/3");
    expect(res.statusCode).toBe(204);
  });
});
