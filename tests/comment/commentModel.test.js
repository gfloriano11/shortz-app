import { describe, expect, it, vi } from "vitest";
import Comment from "../../modules/comment/commentModel";
import User from "../../modules/users/userModel";
import Video from "../../modules/video/videoModel";

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

  it("should validate if user exists", async () => {
    const user = await User.findOne({ where: { id: 1 } });
    expect(user).not.toBeNull();
    expect(user).not.toBeUndefined();
    expect(user.id).toBe(1);

    const comment = new Comment({
      content: "meu comentario",
      userId: 1,
      videoId: 1,
    });

    expect(comment.userId).not.toBeNull();
    expect(comment.userId).not.toBeUndefined();
    expect(comment.videoId).not.toBeNull();
    expect(comment.videoId).not.toBeUndefined();
    expect(comment.content).not.toBeNull();
    expect(comment.content).not.toBeUndefined();
    expect(comment.content).not.toBeFalsy();
  });

  it("should validate if video exists", async () => {
    const video = await Video.findOne({ where: { id: 1 } });
    expect(video).not.toBeNull();
    expect(video).not.toBeUndefined();
    expect(video.id).toBe(1);
  });
});