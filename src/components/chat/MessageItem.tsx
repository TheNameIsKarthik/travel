"use client";

import React from "react";
import { Bot } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { LocationCarousel } from "./LocationCarousel";

interface Destination {
  name: string;
  image: string;
  budget: string;
  provider: string;
  link: string;
}

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  carouselData?: Destination[];
}

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const { user } = useUser();
  const isUser = message?.role === "user";

  return (
    <div className={`flex items-start gap-4 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full
          ${isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
      >
        {isUser ? (
          <img src={user?.imageUrl || "/default-avatar.png"} alt='User avatar' className='w-10 h-auto rounded-full object-cover' />
        ) : (
          <Bot className='h-4 w-4' />
        )}
      </div>

      <div
        className={`max-w-full sm:max-w-[90%] rounded px-4 py-3 
        ${isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
      >
        {message.content === "Typing..." ? (
          <p className='text-sm italic animate-pulse'>{message.content}</p>
        ) : message.carouselData ? (
          <>
            <p className='text-sm mb-5'>{message.content}</p>
            <LocationCarousel destinations={message.carouselData} />
          </>
        ) : (
          <p className='text-sm'>{message.content}</p>
        )}
      </div>
    </div>
  );
}
