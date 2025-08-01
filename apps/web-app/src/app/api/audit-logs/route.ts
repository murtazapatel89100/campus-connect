// src/app/api/audit-logs/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb/connectdb";
import { AuditLog } from "@/lib/mongodb/models/auditLogModel";

export async function GET() {
  try {
    await connectDB();
    const logs = await AuditLog.find({}).sort({ timestamp: -1 }).limit(100);
    return NextResponse.json({ logs });
  } catch (error) {
    console.error("Failed to fetch logs", error);
    return NextResponse.json({ error: "Failed to fetch logs" }, { status: 500 });
  }
}
