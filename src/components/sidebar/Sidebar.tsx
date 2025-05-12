import React from "react";
import NewChatButton from "./NewChatButton";
import ChatList from "./ChatList";
import { Compass, X } from "lucide-react";
import Link from "next/link";

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

interface SidebarProps {
  chats: Chat[];
  activeChat: Chat | null;
  toggleFavorite: (chatId: string) => void;
  deleteChat: (chatId: string) => void;
  setActiveChat: (chatId: string) => void;
  createNewChat: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({
  chats,
  activeChat,
  toggleFavorite,
  deleteChat,
  setActiveChat,
  createNewChat,
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  const favoriteChats = chats.filter((chat) => chat.favorite);
  const regularChats = chats.filter((chat) => !chat.favorite);

  return (
    <aside
      className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-black text-white 
        transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className='flex h-full flex-col overflow-hidden p-2'>
        <div className='md:mr-4 flex items-center justify-end p-2 md:p-5'>
          <button onClick={toggleSidebar} className='md:hidden p-2 text-white'>
            <X className='h-6 w-6' />
          </button>
          <Link href='/' className='flex items-center space-x-2 hidden md:flex'>
            <Compass className='h-6 w-6' />
            <span className='font-bold text-xl'>UDO-TRAVEL</span>
          </Link>
        </div>
        <NewChatButton
          onClick={() => {
            toggleSidebar();
            createNewChat();
          }}
        />

        {/* Favorites Section */}
        {favoriteChats.length > 0 && (
          <div className='mb-2 mt-4'>
            <h2 className='px-3 text-xs font-medium uppercase text-gray-400'>Favorites</h2>
            <ChatList
              chats={favoriteChats}
              activeChat={activeChat}
              toggleFavorite={toggleFavorite}
              deleteChat={deleteChat}
              setActiveChat={setActiveChat}
            />
          </div>
        )}

        {/* Regular Chats Section */}
        {regularChats.length > 0 && (
          <div className='mb-2 mt-4'>
            <h2 className='px-3 text-xs font-medium uppercase text-gray-400'>Chats</h2>
            <ChatList
              chats={regularChats}
              activeChat={activeChat}
              toggleFavorite={toggleFavorite}
              deleteChat={deleteChat}
              setActiveChat={setActiveChat}
            />
          </div>
        )}
      </div>
    </aside>
  );
}
