import { describe, expect, it, vi } from "vitest";
import * as likeController from "../../modules/like/likeController";
require("../../configuration/associations");

describe("Create or toggle like", () => {
  it("should toogle or create if not exists", async () => {
    const req = {
      params: {
        videoId: 1,
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

    await likeController.toggleLike(req, res);
  });
});