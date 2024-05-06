import { Hono } from "hono";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const timelineSchema = z.object({
  id: z.number().int().positive().min(1).optional(),
  title: z.string(),
  cardTitle: z.string(),
  media: z.string(),
  cardDetailedText: z.string(),
});

type Timeline = z.infer<typeof timelineSchema>;

const createTimelineSchema = timelineSchema.omit({ id: true });

export const timelineRoute = new Hono()
  .get("/", async (c) => {
    const timelines: Timeline[] = await prisma.timeline.findMany({
      orderBy: [
        {
          title: "asc",
        },
      ],
    });
    return c.json(timelines);
  })
  .post("/", zValidator("json", createTimelineSchema), async (c) => {
    const timeline: Timeline = c.req.valid("json");

    const result = await prisma.timeline.upsert({
      where: { id: timeline.id },
      update: timeline,
      create: timeline,
    });

    return c.json(result);
  })
  .delete("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const timeline: Timeline | null = await prisma.timeline.findUnique({
      where: { id: id },
    });

    if (!timeline) {
      return c.notFound();
    }

    const res = await prisma.timeline.delete({
      where: { id: id },
    });

    return c.json(res);
  });
