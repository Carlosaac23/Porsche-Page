import { Link } from 'react-router-dom';
import { Ban } from 'lucide-react';
import Header from '@/components/Welcome/Header';
import Footer from '@/components/Footer/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className='flex items-center justify-center'>
        <div className='mt-10 p-10'>
          <h1 className='text-center text-3xl font-bold'>404</h1>
          <div className='flex justify-center'>
            <h2 className='text-2x mb-6 inline-flex items-center gap-2'>
              Not Found Page{' '}
              <span>
                <Ban size={28} color='#fb2c36' />
              </span>
            </h2>
          </div>
          <div className='text-center'>
            <Link to={'/'}>
              <button className='cursor-pointer rounded-lg border border-neutral-800 px-6 py-3 font-semibold hover:border-neutral-500'>
                Go back Home
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className='fixed right-0 bottom-0 left-0'>
        <Footer />
      </div>
    </>
  );
}
