import { Link } from 'react-router-dom';
import { Ban } from 'lucide-react';
import Header from '../components/Welcome/Header';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className='flex justify-center items-center'>
        <div className='p-10 mt-10'>
          <h1 className='text-center text-3xl font-bold'>404</h1>
          <div className='flex justify-center'>
            <h2 className='inline-flex items-center gap-2 mb-6 text-2x'>
              Not Found Page{' '}
              <span>
                <Ban size={28} color='#fb2c36' />
              </span>
            </h2>
          </div>
          <div className='text-center'>
            <Link to={'/'}>
              <button className='font-semibold border border-neutral-800 rounded-lg py-3 px-6 hover:border-neutral-500 cursor-pointer'>Go back Home</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
