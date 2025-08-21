import { motion } from 'motion/react';
import { Zap, ChevronUp, Gauge, Power } from 'lucide-react';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center mt-10'>
      <motion.h1
        className='text-2xl md:text-3xl xl:text-4xl mb-2 font-bold'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Choose the best car
      </motion.h1>
      <motion.p
        className='text-sm xl:text-lg mb-2'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Porsche Taycan Turbo S
      </motion.p>
      <motion.div
        className='flex items-center gap-1 mb-10'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Zap className='xl:w-5 xl:h-5' size={16} color='#fafafa' />
        <p className='font-semibold text-sm xl:text-md'>Electric Car</p>
      </motion.div>

      <motion.img
        className='w-60 xl:w-96 mb-8'
        src='/home.webp'
        alt='Home Porsche image'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      <ul className='w-full flex items-center justify-evenly'>
        <li className='flex flex-col items-center gap-1 w-20'>
          <ChevronUp size={20} color='#fafafa' />
          <span className='text-xs'>2,4s</span>
          <p className='text-sm'>Acceleration</p>
        </li>
        <li className='flex flex-col items-center gap-1 w-20'>
          <Gauge size={20} color='#fafafa' />
          <span className='text-xs'>260 km/h</span>
          <p className='text-sm'>Top Speed</p>
        </li>
        <li className='flex flex-col items-center gap-1 w-20'>
          <Power size={20} color='#fafafa' />
          <span className='text-xs'>700 kw</span>
          <p className='text-sm'>Power</p>
        </li>
      </ul>
    </section>
  );
}
