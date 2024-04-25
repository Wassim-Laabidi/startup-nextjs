import { title } from "process";
import { z } from "zod";

export const postsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().max(1).max(15)).max(1).max(3),
});
