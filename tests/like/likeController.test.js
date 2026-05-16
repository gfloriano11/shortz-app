import { describe, expect, it, vi } from "vitest";
import * as likeController from "../../modules/like/likeController";
require("../../configuration/associations");

describe("Create or toggle like", () => {
  it("should create if a like", async () => {
    const req = {
      params: {
        videoId: 1,
      },
      session: {
        user: {
          id: 1,
        }
      },
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      redirect: vi.fn(),
    };

    await likeController.toggleLike(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("shoud toogle a like", async () => {
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

    expect(res.status).toHaveBeenCalledWith(201);
  })
});