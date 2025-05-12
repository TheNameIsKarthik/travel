"use client";

import React from "react";
import { Menu } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

interface MobileHeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function MobileHeader({ toggleSidebar, isSidebarOpen }: MobileHeaderProps) {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <header className='fixed left-0 right-0 top-0 z-10 flex h-14 items-center border-b border-gray-200 bg-white px-4 md:hidden'>
      <button onClick={toggleSidebar} className='mr-4 rounded-md p-2 hover:bg-gray-100' aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}>
        <Menu className='h-5 w-5' />
      </button>

      <div className='w-full flex items-center justify-between'>
        <Link href={"/"}>
          <h1 className='text-lg font-semibold'>UDO-GPT</h1>
        </Link>
        {user ? (
          <div className='px-5 flex items-center'>
            <UserButton />
          </div>
        ) : (
          <Button onClick={() => openSignIn()} variant='outline' className='hidden md:flex'>
            Login
          </Button>
        )}
      </div>
    </header>
  );
}
