"use client";

import React from "react";
import { Bot } from "lucide-react";
import { useUser } from "@clerk/nextjs";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const { user } = useUser();
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-4 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full 
        ${isUser ? "bg-black text-white" : "bg-gray-200"}`}
      >
        {isUser ? (
          // <User className='h-4 w-4' />
          <img src={user?.imageUrl} className='w-10 h-auto rounded-full object-cover' />
        ) : (
          <Bot className='h-4 w-4' />
        )}
      </div>

      <div
        className={`max-w-[80%] rounded px-4 py-3 
        ${isUser ? "bg-black text-white" : "bg-gray-100"}`}
      >
        <p className='text-sm'>{message.content}</p>
      </div>
    </div>
  );
}
