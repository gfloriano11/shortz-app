import { describe, expect, it, vi } from "vitest";
import * as commentController from "../../modules/comment/commentController";
require("../../configuration/associations");

describe("Create a comment", () => {
  it("should add comment", async () => {
    const req = {
      params: {
        videoId: 1,
      },
      body: {
        content: "aaaaaaaa",
      },
      session: {
        user: {
          id: 1,
        }
      }
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      redirect: vi.fn(),
    };

    await commentController.addComment(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("should find comments by a video", async () => {
    const req = {
      params: {
        videoId: 1
      },
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      redirect: vi.fn(),
    };

    const videos = await commentController.getComments(req, res);

    console.log("Videos: ", videos);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});