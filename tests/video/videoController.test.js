import { describe, expect, it, vi } from "vitest";
import * as videoController from "../../modules/video/videoController";

describe("Create video", () => {
  it("should return 400 if title missing", async () => {
    const request = {
      title: "video",
      description: "Teste",
      duration: 30,
      files: {
        video: "sim",
        thumbail: "sim"
      }
    };

    const response = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    await videoController.uploadVideo(request, response);

    expect(res.status).toHaveBeenCalled(400);
  });

  it("should get all videos", async () => {
    await videoController.getAllVideos();
  });
});