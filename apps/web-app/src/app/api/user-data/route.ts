import { connectDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/lib/models/usermodel";
import { userZodSchema } from "@/validation/userschema";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    await connectDb();

    const body = await req.json();

    const data = userZodSchema.parse(body);

    const newUser = await User.create(data);

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error) {
    console.error("POST /api/user error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
