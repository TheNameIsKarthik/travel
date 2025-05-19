import React from "react";
import MessageItem from "./MessageItem";

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

interface MessageListProps {
  messages: Message[];
}

const MessageList = React.memo(({ messages }: MessageListProps) => {
  return (
    <div className='space-y-6'>
      {messages.map((message) => (
        <MessageItem key={message?.id} message={message} />
      ))}
    </div>
  );
});

export default MessageList;
