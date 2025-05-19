"use client";

import React, { useState, useRef, useEffect } from "react";
import LoadingIndicator from "@/components/ui/loading-indicator";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import EmptyState from "./EmptyState";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";

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

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  favorite: boolean;
  date: Date;
}

interface ChatWindowProps {
  chat: Chat | null;
  isLoading: boolean;
  onNewMessage: (message: Message) => void;
}

export default function ChatWindow({ chat, isLoading, onNewMessage }: ChatWindowProps) {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(chat?.messages || []);
  const [isProcessing, setIsProcessing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(chat?.messages || []);
  }, [chat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: "user",
    };

    onNewMessage(userMessage);
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsProcessing(true);

    const typingMessage: Message = {
      id: "typing-message",
      content: "Typing...",
      role: "assistant",
    };

    setMessages((prev) => [...prev, typingMessage]);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `AI response to: ${message}`,
        role: "assistant",
      };

      setMessages((prev) => prev.map((msg) => (msg.id === "typing-message" ? aiMessage : msg)));
      onNewMessage(aiMessage);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <main className='flex flex-1 flex-col bg-background text-foreground'>
      <div className='flex h-full flex-col overflow-hidden'>
        {isLoading ? (
          <div className='flex h-full items-center justify-center'>
            <LoadingIndicator />
          </div>
        ) : chat ? (
          <div className='flex h-full flex-col'>
            {/* Header */}
            <div className='border-b border-border p-4 flex items-center justify-between'>
              <h1 className='text-lg font-medium'>{chat.title}</h1>
              {user ? (
                <div className='px-5 flex items-center gap-3'>
                  <ModeToggle />
                  <UserButton />
                </div>
              ) : (
                <Button onClick={() => openSignIn()} variant='outline' className='hidden md:flex'>
                  Login
                </Button>
              )}
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-4'>
              <div className='mx-auto max-w-3xl space-y-6'>
                <MessageList messages={messages} />
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className='border-t border-border p-4'>
              <form onSubmit={handleSubmit} className='mx-auto max-w-3xl'>
                <div className='flex items-center gap-2 rounded-lg border border-input bg-background p-2'>
                  <input
                    type='text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Message UDO-GPT...'
                    className='flex-1 bg-transparent px-2 py-1 text-foreground placeholder:text-muted-foreground outline-none'
                    disabled={isProcessing}
                  />
                  <button
                    type='submit'
                    className='rounded-md bg-primary text-primary-foreground p-2 transition-opacity hover:opacity-80 disabled:opacity-50'
                    disabled={isProcessing || !message.trim()}
                  >
                    <Send className='h-4 w-4' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  );
}
