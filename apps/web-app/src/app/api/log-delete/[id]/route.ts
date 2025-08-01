// app/api/audit-log/[id]/route.ts

import connectDB from "@/lib/mongodb/connectdb";
import { AuditLog } from "@/lib/mongodb/models/auditLogModel";
import { NextResponse } from "next/server";

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    await AuditLog.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete log" }, { status: 500 });
  }
}
