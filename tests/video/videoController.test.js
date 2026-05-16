import { describe, expect, it, vi } from "vitest";
import * as videoController from "../../modules/video/videoController";
require("../../configuration/associations");

describe("Create video", () => {
  it("should return 400 if title missing", async () => {
    const req = {
      body: {
        description: "Teste",
        duration: 30,
      },
      session: {
        user: {
          id: 1,
        },
      },
      files: {
        video: [
          {
            filename: "video.mp4"
          }
        ],

        thumbnail: [
          {
            filename: "thumb.jpg"
          }
        ]
      },
      flash: vi.fn(),
    };
    
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      redirect: vi.fn(),
    };

    await videoController.uploadVideo(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("should get all videos", async () => {
    await videoController.getAllVideos();
  });
});