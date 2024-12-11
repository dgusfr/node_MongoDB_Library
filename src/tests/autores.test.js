import request from "supertest";
import app from "../app.js";

describe("Testes das rotas de autores", () => {
  it("Deve retornar todos os autores", async () => {
    const res = await request(app).get("/autores");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Deve adicionar um novo autor", async () => {
    const novoAutor = {
      id: 1,
      nome: "J.K. Rowling",
      nacionalidade: "Britânica",
    };
    const res = await request(app).post("/autores").send(novoAutor);
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe(novoAutor.nome);
  });

  it("Deve retornar um autor pelo ID", async () => {
    const res = await request(app).get("/autores/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it("Deve atualizar um autor pelo ID", async () => {
    const atualizacao = {
      nome: "J.K. Rowling Atualizada",
      nacionalidade: "Britânica",
    };
    const res = await request(app).put("/autores/1").send(atualizacao);
    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe(atualizacao.nome);
  });

  it("Deve deletar um autor pelo ID", async () => {
    const res = await request(app).delete("/autores/1");
    expect(res.statusCode).toBe(204);
  });
});
