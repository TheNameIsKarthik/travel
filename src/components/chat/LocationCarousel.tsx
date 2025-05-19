"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Destination {
  name: string;
  image: string;
  budget: string;
  provider: string;
  link: string;
}

interface LocationCarouselProps {
  destinations: Destination[];
  className?: string;
}

export function LocationCarousel({ destinations }: LocationCarouselProps) {
  return (
    <div className='flex flex-col space-y-4 w-full max-w-[700px] mx-auto px-2'>
      <div className='w-full max-w-screen-sm mx-auto px-2'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className='w-full'
        >
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className='w-full sm:basis-1/2 lg:basis-1/3 '>
                <DestinationCard destination={destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex justify-center mt-2'>
            <CarouselPrevious className='relative static mr-2 h-7 w-7' />
            <CarouselNext className='relative static h-7 w-7' />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className='w-full max-w-xs bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col'>
      <div className='relative w-full h-[120px] sm:h-[140px] md:h-[160px]'>
        <Image src={destination.image || "/placeholder.svg"} alt={destination.name} layout='fill' objectFit='cover' className='rounded-t-lg' />
      </div>
      <div className='p-3 flex flex-col flex-grow'>
        <h3 className='font-medium text-base mb-1 line-clamp-1'>{destination.name}</h3>
        <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>{destination.provider}</p>
        <p className='text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2'>{destination.budget}</p>
        <div className='mt-auto'>
          <Link href={destination.link} className='inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline'>
            <ExternalLink size={12} className='mr-1' />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}
