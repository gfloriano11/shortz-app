import { describe, expect, it, vi } from "vitest";
import Like from "../../modules/like/likeModel";

vi.mock("sequelize", () => ({
  DataTypes: {}
}));

vi.mock("../../configuration/database.js", () => ({}));

describe("Like Model", () => {
  it("should add like to a video by an user", () => {
    const like = new Like({
      userId: 1,
      videoId: 1
    })

    expect(like.userId).not.toBeNull();
    expect(like.userId).not.toBeUndefined();
    expect(like.videoId).not.toBeNull();
    expect(like.videoId).not.toBeUndefined();
  });
});