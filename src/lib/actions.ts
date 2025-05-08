import { v4 as uuidv4 } from "uuid";

// In-memory mock database
let chats: any[] = [];

// Fetch all chats for the user
export async function getUserChats() {
  // Simulate fetching from DB
  return chats;
}

// Create a new chat with a given name
export async function createChat(name: string) {
  const newChat = {
    id: Date.now(),
    name,
    preview: "",
    messages: [],
    isFavorite: false,
  };
  chats.unshift(newChat);
  return newChat;
}

// Add a new message to a chat
export async function addMessageToChat(chatId: number, content: string, sender: "user" | "ai") {
  const chat = chats.find((c) => c.id === chatId);
  if (!chat) throw new Error("Chat not found");

  const message = {
    id: Date.now().toString(),
    content,
    sender, // This is now typed correctly
    timestamp: new Date(),
  };

  chat.messages.push(message);
  chat.preview = content;
}

// Toggle the favorite status of a chat
export async function toggleFavoriteChat(chatId: number) {
  const chat = chats.find((c) => c.id === chatId);
  if (!chat) throw new Error("Chat not found");

  // Toggle the favorite status
  chat.isFavorite = !chat.isFavorite;

  // You can simulate persistence here if needed

  return chat; // Return the updated chat
}

// Delete a chat by its ID
export async function deleteChat(chatId: number) {
  const chatIndex = chats.findIndex((c) => c.id === chatId);
  if (chatIndex === -1) throw new Error("Chat not found");

  // Remove the chat from the array
  chats.splice(chatIndex, 1);

  // You can simulate persistence here if needed

  return true; // Return success
}
