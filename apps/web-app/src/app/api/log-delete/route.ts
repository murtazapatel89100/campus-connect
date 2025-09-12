// app/api/log-delete/route.ts

import connectDB from "@/lib/mongodb/connectdb";
import { AuditLog } from "@/lib/mongodb/models/auditLogModel";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, deleteAll } = body;

    if (deleteAll) {
      await AuditLog.deleteMany({});
      return NextResponse.json({ success: true, message: "All logs deleted" });
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing ID for single log deletion" },
        { status: 400 },
      );
    }

    await AuditLog.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: `Log ${id} deleted` });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete log(s)" },
      { status: 500 },
    );
  }
}
