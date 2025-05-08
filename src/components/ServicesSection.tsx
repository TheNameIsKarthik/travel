import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Map, Clock } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>Our Services</h2>
            <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
              Discover how our AI-powered platform can transform your travel experience
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12'>
          <Card className='transition-all hover:shadow-lg'>
            <CardHeader className='pb-2'>
              <div className='mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                <Laptop className='h-5 w-5 text-primary' />
              </div>
              <CardTitle>AI Trip Planning</CardTitle>
              <CardDescription>Let our AI create personalized itineraries based on your preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our advanced AI analyzes thousands of options to create the perfect trip plan tailored specifically to your interests, budget, and
                schedule.
              </p>
            </CardContent>
          </Card>

          <Card className='transition-all hover:shadow-lg'>
            <CardHeader className='pb-2'>
              <div className='mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                <Map className='h-5 w-5 text-primary' />
              </div>
              <CardTitle>Custom Itineraries</CardTitle>
              <CardDescription>Detailed day-by-day plans with activities and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Get comprehensive itineraries with activities, restaurants, accommodations, and transportation options all organized in one place.
              </p>
            </CardContent>
          </Card>

          <Card className='transition-all hover:shadow-lg'>
            <CardHeader className='pb-2'>
              <div className='mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                <Clock className='h-5 w-5 text-primary' />
              </div>
              <CardTitle>Real-Time Suggestions</CardTitle>
              <CardDescription>Receive updates and recommendations during your trip</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our AI assistant provides real-time suggestions based on weather changes, local events, and your feedback throughout your journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
