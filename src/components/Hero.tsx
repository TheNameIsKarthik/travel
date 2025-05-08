import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
              Plan smarter itineraries and unforgettable trips with AI
            </h1>
            <p className='max-w-[600px] text-muted-foreground md:text-xl'>
              Let our platform create personalized travel experiences tailored to your preferences, budget, and schedule.
            </p>
            <div className='flex flex-col gap-2 sm:flex-row'>
              <Button size='lg' className='inline-flex items-center'>
                Start Planning
                <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
              <Button variant='outline' size='lg'>
                Learn More
              </Button>
            </div>
          </div>
          <div className='relative aspect-video overflow-hidden rounded-xl'>
            <Image
              src='https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Travel planning illustration'
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
