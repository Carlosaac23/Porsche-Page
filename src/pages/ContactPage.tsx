import { FormEvent } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Welcome/Header';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className='flex-1'>
        <div className='mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:px-8'>
          <div className='mx-auto max-w-xl'>
            <h1 className='text-2xl font-semibold tracking-tight sm:text-4xl'>
              Contact Us
            </h1>
            <p className='mt-4 text-sm text-neutral-400'>
              Get in touch and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='mt-2 block w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-400 focus:border-neutral-500 focus:outline-none'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-2 block w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-400 focus:border-neutral-500 focus:outline-none'
                  placeholder='johndoe@email.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  className='mt-2 block w-full resize-none rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-400 focus:border-neutral-500 focus:outline-none'
                  placeholder='I want to buy a new Porsche'
                />
              </div>

              <button
                type='submit'
                onClick={() => toast.success('¡Message successfully sent!')}
                className='mb-10 w-full cursor-pointer rounded-lg border border-neutral-800 px-7 py-4 text-sm font-semibold hover:border-neutral-500'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <div className='fixed right-0 bottom-0 left-0'>
        <Footer />
      </div>
    </>
  );
}
