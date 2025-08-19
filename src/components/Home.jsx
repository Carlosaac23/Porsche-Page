import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <motion.h1
        className='text-4xl mb-2 font-bold'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Choose the best car
      </motion.h1>
      <motion.p className='text-base mb-2' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
        Porsche Taycan Turbo S
      </motion.p>
      <p className='flex gap-1 mb-10 font-semibold'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' />
        </svg>
        Electric Car
      </p>
      <motion.img
        className='w-96'
        src='/home.webp'
        alt='Home Porsche image'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </div>
  );
}
