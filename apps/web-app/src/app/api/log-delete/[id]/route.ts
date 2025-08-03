// app/api/audit-log/[id]/route.ts

import connectDB from "@/lib/mongodb/connectdb";
import { AuditLog } from "@/lib/mongodb/models/auditLogModel";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing ID" },
        { status: 400 }
      );
    }
    await AuditLog.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete log" },
      { status: 500 }
    );
  }
}
