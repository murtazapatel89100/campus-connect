// lib/mongodb/auditLogModel.ts
import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    username: String,
    entityId: String,
    environment: String,
    browser: String,
    timestamp: Date,
    action: String,
  },
  { collection: "audit_logs" }
);

export const AuditLog =
  mongoose.models.AuditLog || mongoose.model("AuditLog", auditLogSchema);
