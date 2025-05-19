"use client";

import React, { useState } from "react";
import { Heart, Trash2, MessageSquare } from "lucide-react";

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

interface ChatItemProps {
  chat: Chat;
  isActive: boolean;
  toggleFavorite: (chatId: string) => void;
  deleteChat: (chatId: string) => void;
  setActiveChat: (chatId: string) => void;
  onClick: () => void;
}

export default function ChatItem({ chat, isActive, toggleFavorite, deleteChat, setActiveChat, onClick }: ChatItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`group relative cursor-pointer rounded-md p-3 text-sm transition-colors
        ${isActive ? "bg-gray-800" : "hover:bg-gray-800/50"}`}
      onClick={() => setActiveChat(chat.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center gap-3'>
        <MessageSquare className='h-4 w-4 flex-shrink-0 text-gray-400' />
        <span className='line-clamp-1 flex-1'>{chat.title}</span>
      </div>

      {/* Action buttons - visible on hover */}
      <div
        onClick={onClick}
        className={`absolute right-2 top-1/2 flex -translate-y-1/2 gap-2 transition-opacity
        ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(chat.id);
          }}
          className='p-1 text-gray-400 hover:text-white'
          aria-label={chat.favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`h-4 w-4 ${chat.favorite ? "fill-white text-white" : ""}`} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteChat(chat.id);
          }}
          className='p-1 text-gray-400 hover:text-white'
          aria-label='Delete chat'
        >
          <Trash2 className='h-4 w-4' />
        </button>
      </div>
    </li>
  );
}
