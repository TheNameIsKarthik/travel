import React from "react";
import ChatItem from "./ChatItem";

// Types
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}
interface Chat {
  id: string;
  title: string;
  messages: Message[];
  favorite: boolean;
  date: Date;
}

interface ChatListProps {
  chats: Chat[];
  activeChat: Chat | null;
  toggleFavorite: (chatId: string) => void;
  deleteChat: (chatId: string) => void;
  setActiveChat: (chatId: string) => void;
}

export default function ChatList({ chats, activeChat, toggleFavorite, deleteChat, setActiveChat }: ChatListProps) {
  return (
    <ul className='mt-2 space-y-1'>
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          isActive={activeChat?.id === chat.id}
          toggleFavorite={toggleFavorite}
          deleteChat={deleteChat}
          setActiveChat={setActiveChat}
        />
      ))}
    </ul>
  );
}
