import { describe, expect, it, vi } from "vitest";
import Comment from "../../modules/comment/commentModel";

vi.mock("sequelize", () => ({
  DataTypes: {}
}));

vi.mock("../../configuration/database.js", () => ({}));

describe("Comment Model", () => {
  it("should add a comment by user and video id", () => {
    const comment = new Comment({
      content: "meu comentario",
      userId: 1,
      videoId: 1,
    })

    expect(comment.userId).not.toBeNull();
    expect(comment.userId).not.toBeUndefined();
    expect(comment.videoId).not.toBeNull();
    expect(comment.videoId).not.toBeUndefined();
    expect(comment.content).not.toBeNull();
    expect(comment.content).not.toBeUndefined();
    expect(comment.content).not.toBeFalsy();
  });
});