import React from "react";
import MessageItem from "./MessageItem";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className='space-y-6'>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}
