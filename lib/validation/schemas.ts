import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const ideaSchema = z.object({
  title: z.string().min(3),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  priority: z.enum(["Low", "Medium", "High"]),
  status: z.enum(["Open", "In Progress", "Done"]),
  linkedCampaign: z.string().optional()
});
