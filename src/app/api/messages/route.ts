import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chatId, userId, content, role } = await req.json();

  try {
    if (!chatId || !userId || !content || !role) {
      return NextResponse.json({ success: false, message: "ChatId, userId, content, and role are required" }, { status: 400 });
    }

    const chat = await prisma.udoChat.findFirst({
      where: { id: chatId, userId },
      include: {
        messages: true,
      },
    });

    if (!chat) {
      return NextResponse.json({ success: false, message: "Chat not found or not owned by user" }, { status: 404 });
    }

    if (chat.messages.length === 0 && role === "user") {
      const newTitle = formatTitle(content);
      await prisma.udoChat.update({
        where: { id: chatId },
        data: { title: newTitle },
      });
    }

    const message = await prisma.udoMessage.create({
      data: {
        content,
        role,
        chatId,
      },
    });

    return NextResponse.json({ success: true, message }, { status: 201 });
  } catch (error) {
    console.error("Add message error:", error);
    return NextResponse.json({ success: false, error: "Failed to add message" }, { status: 500 });
  }
}

function formatTitle(message: string): string {
  const words = message.trim().split(/\s+/);
  return words.length > 4 ? `${words.slice(0, 4).join(" ")}...` : message;
}
