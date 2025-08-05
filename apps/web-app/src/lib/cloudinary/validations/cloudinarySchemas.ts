// lib/validations/cloudinarySchemas.ts
import { z } from "zod";

export const auditLogSchema = z.object({
  username: z.string(),
  entityId: z.string(),
  environment: z.string(),
  browser: z.string(),
  timestamp: z.coerce.date(), // accepts string or Date and coerces to Date
  action: z.enum(["upload", "delete"]), // restrict to valid actions
});

export type AuditLogInput = z.infer<typeof auditLogSchema>;
