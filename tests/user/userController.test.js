import { describe, expect, it, vi } from "vitest";

describe("Register", () => {
  const password = "myPassword";
  const confirmPassword = "myPassword";
  const fullname = "aaaaa";
  const email = "gustavo@gmail.com";

  it("password should exists", () => {
    expect(password).not.toBeNull();
    expect(password).not.toBeUndefined();
    expect(password).not.toBeFalsy();
  });

  it("password confirmation should exists", () => {
    expect(confirmPassword).not.toBeNull();
    expect(confirmPassword).not.toBeUndefined();
    expect(confirmPassword).not.toBeFalsy();
  });

  it("both password should be equal", () => {
    expect(password).toBe(confirmPassword);
  });

  it("user should have fullname", () => {
    expect(fullname).not.toBeNull();
    expect(fullname).not.toBeUndefined();
    expect(fullname).not.toBeFalsy();
    expect(fullname).toBeTypeOf("string");
  });

  it("user should have email", () => {
    expect(email).not.toBeNull();
    expect(email).not.toBeUndefined();
    expect(email).not.toBeFalsy();
  });
});