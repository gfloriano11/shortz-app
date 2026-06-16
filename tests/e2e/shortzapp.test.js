import request from 'supertest';
import { describe, expect, it } from "vitest";
import app from '../../app';

describe("Testes de integração do ShortzApp", () => {

  it("deve cadastrar um usuário através da rota POST /register", async () => {
    const response = await request(app)
      .post('/register')
      .send({
        username: "vitor",
        fullName: "Vitor Silva",
        email: "vitor@email.com",
        password: "123456",
        confirmPassword: "123456"
      });

    expect(response.status).toBe(302);
  });

  it("deve autenticar um usuário através da rota POST /login", async () => {
    const response = await request(app)
      .post('/login')
      .send({
        login: 'vitor@email.com',
        password: '123456'
      });

    expect(response.status).toBe(302);
  });

  it("deve permitir comentar um vídeo para um usuário autenticado", async () => {
    const agent = request.agent(app);

    await agent
      .post("/login")
      .send({
        login: "gus",
        password: "123456"
      });

    const response = await agent
      .post("/video/1/comment")
      .send({
        content: "Vídeo muito bom!"
      });

    expect(response.status).toBe(201);
  });

  it("deve permitir curtir um vídeo para um usuário autenticado", async () => {
    const agent = request.agent(app);

    await agent
      .post("/login")
      .send({
        login: "gus",
        password: "123456"
      });

    const response = await agent.post('/video/1/toggle-like')

    expect(response.status).toBe(200);
  });
});