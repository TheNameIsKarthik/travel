import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { chatId, userId } = await req.json();

  try {
    if (!chatId || !userId) {
      return NextResponse.json({ success: false, message: "ChatId and userId are required" }, { status: 400 });
    }

    const chat = await prisma.udoChat.findFirst({
      where: { id: chatId, userId },
    });

    if (!chat) {
      return NextResponse.json({ success: false, message: "Chat not found or not owned by user" }, { status: 404 });
    }

    const updatedChat = await prisma.udoChat.update({
      where: { id: chatId },
      data: { favorite: !chat.favorite },
    });

    return NextResponse.json({ success: true, updatedChat }, { status: 200 });
  } catch (error) {
    console.error("Toggle favorite error:", error);
    return NextResponse.json({ success: false, error: "Failed to toggle favorite" }, { status: 500 });
  }
}
