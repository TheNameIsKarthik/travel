import Link from "next/link";
import { Compass, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className='w-full border-t bg-background'>
      <div className='container mx-auto flex flex-col gap-8 py-12 px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col items-center sm:items-start space-y-4'>
            <div className='flex justify-center sm:justify-start items-center space-x-2'>
              <Compass className='h-6 w-6' />
              <span className='font-bold'>UDO-TRAVEL</span>
            </div>
            <p className='text-sm text-muted-foreground text-center sm:text-left'>AI-powered travel planning for unforgettable experiences.</p>
            <div className='flex justify-center sm:justify-start space-x-4'>
              <Link href='#' aria-label='Instagram'>
                <Instagram className='h-5 w-5 text-muted-foreground hover:text-foreground' />
              </Link>
              <Link href='#' aria-label='Twitter'>
                <Twitter className='h-5 w-5 text-muted-foreground hover:text-foreground' />
              </Link>
              <Link href='#' aria-label='Facebook'>
                <Facebook className='h-5 w-5 text-muted-foreground hover:text-foreground' />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center sm:items-start space-y-4'>
            <h3 className='font-medium text-center sm:text-left'>Company</h3>
            <nav className='flex flex-col space-y-2 text-sm items-center sm:items-start'>
              <Link href='/about' className='text-muted-foreground hover:text-foreground'>
                About
              </Link>
              <Link href='/careers' className='text-muted-foreground hover:text-foreground'>
                Careers
              </Link>
              <Link href='/contact' className='text-muted-foreground hover:text-foreground'>
                Contact
              </Link>
              <Link href='/press' className='text-muted-foreground hover:text-foreground'>
                Press
              </Link>
            </nav>
          </div>
          <div className='flex flex-col items-center sm:items-start space-y-4'>
            <h3 className='font-medium text-center sm:text-left'>Legal</h3>
            <nav className='flex flex-col space-y-2 text-sm items-center sm:items-start'>
              <Link href='/privacy' className='text-muted-foreground hover:text-foreground'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-muted-foreground hover:text-foreground'>
                Terms of Service
              </Link>
              <Link href='/cookies' className='text-muted-foreground hover:text-foreground'>
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center border-t pt-8'>
          <p className='text-xs text-muted-foreground text-center sm:text-left'>© {new Date().getFullYear()} UDO-TRAVEL. All rights reserved.</p>
          <div className='flex items-center space-x-2 mt-4 sm:mt-0'>
            <Mail className='h-4 w-4 text-muted-foreground' />
            <span className='text-xs text-muted-foreground'>contact@udo-travel.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
