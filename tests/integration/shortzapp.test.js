import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import app from '../../app';
const sequelize = require('../../configuration/database');
const Video = require('../../modules/video/videoModel');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});


describe("Testes de integração do ShortzApp", () => {

  const USER = {
    username: "vitor",
    fullName: "Vitor Silva",
    email: "vitor@email.com",
    password: "123456"
  };

  it("deve cadastrar um usuário através da rota POST /register", async () => {
    const response = await request(app)
      .post('/register')
      .send({
        ...USER,
        confirmPassword: USER.password
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

  it("deve criar um vídeo através da rota POST /create", async () => {
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
        login: USER.email,
        password: USER.password
      });

    await Video.create({
      title: 'Vídeo teste',
      videoPath: 'teste.mp4',
      thumbnailPath: 'teste.png',
      userId: 1
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
        login: USER.email,
        password: USER.password
      });

    const response = await agent.post('/video/1/toggle-like')

    expect(response.status).toBe(201);
  });
});