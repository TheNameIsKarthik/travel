import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
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

    // Delete messages associated with the chat
    await prisma.udoMessage.deleteMany({ where: { chatId } });

    // Delete the chat itself
    await prisma.udoChat.delete({ where: { id: chatId } });

    return NextResponse.json({ success: true, message: "Chat deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete chat error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete chat" }, { status: 500 });
  }
}
