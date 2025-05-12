import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Create a new chat for a user
async function createChat(userId: string, title: string) {
  const chat = await prisma.udoChat.create({
    data: {
      title,
      userId,
    },
  });
  console.log("🆕 Chat created:", chat);
  return chat;
}

// ✅ Add a message to a chat (if owned by the user)
async function addMessage(chatId: string, userId: string, content: string, role: string) {
  const chat = await prisma.udoChat.findFirst({
    where: { id: chatId, userId },
  });

  if (!chat) {
    throw new Error("Chat not found or doesn't belong to user.");
  }

  const message = await prisma.udoMessage.create({
    data: {
      content,
      role,
      chatId,
    },
  });

  console.log("💬 Message added:", message);
  return message;
}

// ✅ Fetch all chats with messages for a user
async function getUserChats(userId: string) {
  const chats = await prisma.udoChat.findMany({
    where: { userId },
    include: {
      messages: true,
    },
  });
  console.log("📁 Chats for user:", chats);
  return chats;
}

// ✅ Toggle favorite status of a chat
async function toggleFavorite(chatId: string, userId: string) {
  const chat = await prisma.udoChat.findFirst({
    where: { id: chatId, userId },
  });

  if (!chat) {
    throw new Error("Chat not found or unauthorized.");
  }

  const updated = await prisma.udoChat.update({
    where: { id: chatId },
    data: { favorite: !chat.favorite },
  });

  console.log("⭐ Favorite toggled:", updated);
  return updated;
}

// ✅ Delete a chat (and its messages)
async function deleteChat(chatId: string, userId: string) {
  const chat = await prisma.udoChat.findFirst({
    where: { id: chatId, userId },
  });

  if (!chat) {
    throw new Error("Chat not found or unauthorized.");
  }

  await prisma.udoMessage.deleteMany({ where: { chatId } });
  await prisma.udoChat.delete({ where: { id: chatId } });

  console.log("🗑️ Chat deleted:", chatId);
}

// 🔄 Entry point — for testing
async function main() {
  const userId = "user123"; // mock Clerk user ID
  // const chat = await createChat(userId, "Test Chat From Script");
  // await addMessage(chat.id, userId, "Hey there!", "user");
  // await addMessage(chat.id, userId, "How can I help you today?", "assistant");

  await getUserChats(userId);
  // await toggleFavorite(chat.id, userId);
  // await toggleFavorite("07783bf4-43dc-416e-8de4-88abe362a96e", userId);
  // await deleteChat(chat.id, userId); // optional test
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
