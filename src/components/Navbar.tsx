"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser, UserButton, useClerk } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <div className='mr-4 flex'>
          <Link href='/' className='flex items-center space-x-2'>
            <Compass className='h-6 w-6' />
            <span className='font-bold'>UDO-TRAVEL</span>
          </Link>
        </div>
        <div className='flex items-center space-x-2'>
          <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
            <Link href='/' className='transition-colors hover:text-foreground/80'>
              Home
            </Link>
            <Link href='/udo-chat' className='transition-colors hover:text-foreground/80'>
              UDO-Chat
            </Link>
            <Link href='/about' className='transition-colors hover:text-foreground/80'>
              About
            </Link>
            <Link href='/about' className='transition-colors hover:text-foreground/80'>
              Contact
            </Link>
            <ModeToggle />
          </nav>

          {user ? (
            <div className='px-5 flex items-center'>
              <UserButton />
            </div>
          ) : (
            <Button onClick={() => openSignIn()} variant='outline' className='hidden md:flex'>
              Login
            </Button>
          )}

          <NavigationMenu className='md:hidden'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-6 w-[200px]'>
                    {["Home", "UDO-AI", "About", "Contact", "Login"].map((item) => (
                      <li key={item}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                          >
                            {item}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
