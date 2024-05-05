import { Hono } from "hono";
import { handle } from "hono/vercel";

import prisma from "@/lib/prisma";

// export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/test", async (c) => {
  const timelines = await prisma.timeline.findMany();
  return c.json(timelines);
});

export const GET = handle(app);
export const POST = handle(app);
