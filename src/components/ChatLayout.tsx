"use client";

import React, { useState, useEffect } from "react";
import ChatWindow from "./chat/ChatWindow";
import MobileHeader from "./MobileHeader";
import Sidebar from "./sidebar/Sidebar";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

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

export default function ChatLayout() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useUser();
  const fetchChats = async () => {
    try {
      const response = await axios.get(`/api/chats/${user?.id}`);
      const fetchedChats = response.data.chats || [];
      setChats(fetchedChats);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFavorite = async (chatId: string) => {
    try {
      const favState = chats.find((chat) => chat.id === chatId);
      await axios.patch("/api/chats/favourite", { chatId, userId: user?.id });
      setChats((prevChats) => prevChats.map((chat) => (chat.id === chatId ? { ...chat, favorite: !chat.favorite } : chat)));

      if (favState?.favorite) toast.success("Chat removed as favorite");
      else toast.success("Chat marked as favourite");
    } catch (error) {
      console.error("Error marking as favorite:", error);
      toast.error("Failed to mark as favorite");
    }
  };

  const deleteChat = async (chatId: string) => {
    setIsLoading(true);
    try {
      await axios.delete("/api/chats/delete", { data: { chatId, userId: user?.id } });
      setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
      if (activeChatId === chatId) {
        setActiveChatId(null);
      }
      toast.success("Chat deleted");
    } catch (error) {
      console.error("Error deleting chat:", error);
      toast.error("Failed to delete chat");
    }
    setIsLoading(false);
  };

  const createNewChat = async () => {
    setIsLoading(true);
    const newTitle = `Conversation ${chats.length + 1}`;

    try {
      const response = await axios.post("/api/chats", {
        userId: user?.id,
        title: newTitle,
        messages: [],
      });
      const newChat = response.data.chat;
      setChats((prevChats) => [newChat, ...prevChats]);
      setActiveChatId(newChat.id);
    } catch (error) {
      console.error("Error creating chat:", error);
      toast.error("Failed to create chat");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewMessage = async (chatId: string, message: Message) => {
    try {
      const response = await axios.post("/api/messages", {
        chatId,
        userId: user?.id,
        content: message.content,
        role: message.role,
      });

      setChats((prevChats) => {
        return prevChats.map((chat) => {
          const updatedMessages = Array.isArray(chat.messages) ? chat.messages : [];
          fetchChats();
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [...updatedMessages, response.data.message],
            };
          }
          return chat;
        });
      });
      console.log("Message: ", response);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    }
  };

  const activeChat = chats.find((chat) => chat.id === activeChatId) || null;

  return (
    <div className='flex h-screen w-full overflow-hidden bg-white text-black'>
      <MobileHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Sidebar
        chats={chats}
        activeChat={activeChat}
        toggleFavorite={toggleFavorite}
        deleteChat={deleteChat}
        setActiveChat={setActiveChatId}
        createNewChat={createNewChat}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <ChatWindow chat={activeChat} isLoading={isLoading} onNewMessage={(message) => handleNewMessage(activeChatId!, message)} />
    </div>
  );
}
