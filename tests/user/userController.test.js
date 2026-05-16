import { describe, expect, it, vi } from "vitest";
import * as userController from "../../modules/users/userController";
require("../../configuration/associations");

describe("Register", () => {
  it("should register user and redirect to login", async () => {
    const req = {
      body: {
        username: "meu nome",
        email: "meuemail@gmail.com",
        password: "meupass",
        confirmPassword: "meupass",
        fullName: "gustavo"
      },
      flash: vi.fn(),
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      redirect: vi.fn(),
    };

    await userController.register(req, res);

    expect(res.redirect).toHaveBeenCalledWith("/login");
  })
});