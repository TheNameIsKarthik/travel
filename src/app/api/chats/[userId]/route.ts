import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
  const { userId } = params;

  try {
    // Fetch chats for the user with messages included
    const chats = await prisma.udoChat.findMany({
      where: { userId },
      include: { messages: true },
    });

    return NextResponse.json({ success: true, chats }, { status: 200 });
  } catch (error) {
    console.error("Get chats error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch chats" }, { status: 500 });
  }
}
