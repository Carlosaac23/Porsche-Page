import { toast } from 'sonner';
import Balancer from 'react-wrap-balancer';

export default function Offers() {
  return (
    <section className='my-30'>
      <div className='md:flex md:justify-around md:items-center'>
        <div>
          <h2 className='text-lg sm:text-xl xl:text-2xl 3xl:text-4xl font-bold mb-6 text-center'>
            <Balancer>Do you want to receive special offers?</Balancer>
          </h2>
          <p className='text-sm 3xl:text-base text-neutral-400 font-light mb-8 text-center'>
            <Balancer>Be the first to receive all the information about our products and new cars by email by subscribing to our list of mail.</Balancer>
          </p>
          <button
            className='block mx-auto font-semibold text-sm border border-neutral-800 py-4 px-7 rounded-lg hover:border-neutral-500 cursor-pointer mb-10'
            onClick={() => toast.success("You've successfully subscribed")}
          >
            Subscribe now
          </button>
        </div>
        <div>
          <img className='xl:w-3xl' src='/profile.webp' alt='A porsche 911 image' />
        </div>
      </div>
    </section>
  );
}
