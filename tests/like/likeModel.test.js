import { describe, expect, it, vi } from "vitest";
import Like from "../../modules/like/likeModel";
import Video from "../../modules/video/videoModel";

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

  it("should validate like existence or create", async () => {
    const videoId = 1;
    const userId = 1;

    const [like, created] = await Like.findOrCreate({
        where: { userId, videoId },
        defaults: { userId, videoId }
    });

    if (!created) {
      await like.destroy();
      await Video.decrement('likesCount', { where: { id: videoId } });
    } else {
      await Video.increment('likesCount', { where: { id: videoId } });
    }
  });
});