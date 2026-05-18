import { describe, expect, it, vi } from "vitest";
import * as likeController from "../../modules/like/likeController";
require("../../configuration/associations");

describe("Create or toggle like", () => {
  it("should create a like and returns 200 if like don't exists", async () => {
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

  it("shoud toogle a like and returns 201 if like exists", async () => {
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