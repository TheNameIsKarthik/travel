import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Adventure Traveler",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "UDO-AI created the perfect 2-week itinerary for my backpacking trip through Southeast Asia. I discovered hidden gems I would have never found on my own!",
  },
  {
    name: "Michael T.",
    role: "Family Traveler",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Planning a family vacation with three kids used to be stressful. UDO-AI suggested kid-friendly activities and restaurants that everyone loved!",
  },
  {
    name: "Elena R.",
    role: "Business Traveler",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a frequent business traveler, I appreciate how UDO-AI optimizes my schedule to fit in sightseeing between meetings. It's like having a personal assistant!",
  },
];

export default function Testimonials() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>What Our Users Say</h2>
            <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>Hear from travelers who have transformed their trips with UDO-AI</p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12'>
          {testimonials.map((t, i) => (
            <Card key={i} className='transition-all hover:shadow-lg'>
              <CardHeader>
                <div className='flex items-center gap-4'>
                  <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>
                    <Image src={t.image} alt={t.name} width={100} height={100} className='object-cover' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>{t.name}</CardTitle>
                    <CardDescription>{t.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-4 w-4 fill-current text-yellow-500' />
                  ))}
                </div>
                <p className='italic'>"{t.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
