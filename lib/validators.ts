import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2)
});

export const ideaSchema = z.object({
  title: z.string().min(1),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  status: z.string().default("new"),
  linkedCampaign: z.string().optional()
});
