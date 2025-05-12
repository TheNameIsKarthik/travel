import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, email, phone, type, status } = await req.json();

  try {
    const existingUser = await prisma.udoUser.findUnique({
      where: { id },
    });

    if (existingUser) {
      return NextResponse.json({ success: false, message: "User already exists" }, { status: 200 });
    }

    const newUser = await prisma.udoUser.create({
      data: {
        id,
        phone,
        email,
        type,
        status,
      },
    });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Create user error:", error);
    return NextResponse.json({ success: false, error: "Failed to create user" }, { status: 500 });
  }
}
