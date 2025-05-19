import React from "react";
import NewChatButton from "./NewChatButton";
import ChatList from "./ChatList";
import { Book, Compass, Globe, Luggage, Wallet, X } from "lucide-react";
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
        {/* Navigation Section */}
        <div className='mb-2 mt-4'>
          <h2 className='px-3 text-xs font-medium uppercase text-muted-foreground'>Navigation</h2>
          <nav className='mt-2 space-y-1'>
            <Link href='/discover' className='flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-800/80 rounded-md'>
              <Globe className='h-4 w-4' />
              Discover
            </Link>
            <Link href='/user/bookings' className='flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-800/80 rounded-md'>
              <Luggage className='h-4 w-4' />
              Bookings
            </Link>
            <Link href='/user/wallet' className='flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-800/80 rounded-md'>
              <Wallet className='h-4 w-4' />
              Wallet
            </Link>
            <Link href='/user/experiences' className='flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-800/80 rounded-md'>
              <Book className='h-4 w-4' />
              Experiences
            </Link>
          </nav>
        </div>

        {/* Favorites Section */}
        {favoriteChats.length > 0 && (
          <div className='mb-2 mt-4'>
            <h2 className='px-3 text-xs font-medium uppercase text-gray-400'>Favorites</h2>
            <ChatList
              onClick={() => {
                toggleSidebar();
              }}
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
              onClick={() => toggleSidebar()}
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
