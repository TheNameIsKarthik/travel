import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId, title } = await req.json();

  try {
    if (!userId || !title) {
      return NextResponse.json({ success: false, message: "UserId and title are required" }, { status: 400 });
    }

    // Check if the user exists
    const user = await prisma.udoUser.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    const chat = await prisma.udoChat.create({
      data: {
        title,
        userId,
      },
    });

    return NextResponse.json({ success: true, chat }, { status: 201 });
  } catch (error) {
    console.error("Create chat error:", error);
    return NextResponse.json({ success: false, error: "Failed to create chat" }, { status: 500 });
  }
}
