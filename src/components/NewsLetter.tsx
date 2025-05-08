import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Stay Updated</h2>
            <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
              Subscribe to our newsletter for travel tips, new features, and exclusive offers
            </p>
          </div>
          <div className='mx-auto w-full max-w-md space-y-2'>
            <form className='flex flex-col sm:flex-row gap-2'>
              <Input type='email' placeholder='Enter your email' className='flex-1' aria-label='Email address' required />
              <Button type='submit' className='sm:ml-2'>
                Subscribe
              </Button>
            </form>
            <p className='text-xs text-muted-foreground'>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
