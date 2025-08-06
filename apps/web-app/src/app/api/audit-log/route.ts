// app/api/log/route.ts
import connectDB from "@/lib/mongodb/connectdb";
import { AuditLog } from "@/lib/mongodb/models/auditLogModel";
import { auditLogSchema } from "@/lib/cloudinary/validations/cloudinarySchemas";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    const result = auditLogSchema.safeParse(data);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.format() },
        { status: 400 }
      );
    }

    const log = await AuditLog.create(result.data);
    return NextResponse.json({ success: true, log });
  } catch (error) {
    console.error("Failed to save audit log:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save audit log" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const logs = await AuditLog.find().sort({ timestamp: -1 });
    return NextResponse.json({ success: true, logs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch logs" },
      { status: 500 }
    );
  }
}
