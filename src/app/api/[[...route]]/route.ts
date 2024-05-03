import { Hono } from "hono";
import { handle } from "hono/vercel";

import prisma from "@/lib/prisma";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/test", async (c) => {
  //   const users = await prisma.users.findMany().withAccelerateInfo();
  return c.json({
    id: "aaa",
    email: "adsfadsf",
  });
});

export const GET = handle(app);
export const POST = handle(app);
