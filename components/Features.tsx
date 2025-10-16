'use client';

import Image from 'next/image';

export default function Features() {
  return (
    <section className='my-30'>
      <h2 className='mb-20 text-center text-2xl font-semibold sm:text-4xl'>
        More Features
      </h2>
      <div className='relative'>
        <Image
          width={2000}
          height={1000}
          className='mx-auto w-[90%] rounded-lg md:w-xl lg:w-3xl 2xl:w-6xl'
          src='/features.webp'
          alt='A porsche in the street'
        />
        <div className='3xl:left-24 absolute -top-8 -left-4 rounded-lg bg-neutral-500/10 p-3 text-center backdrop-blur-sm xl:left-16 2xl:-left-14 2xl:p-5 2xl:text-left'>
          <h3 className='font-semibold 2xl:text-2xl'>
            650 <span className='text-xs font-normal'>hp</span>
          </h3>
          <p className='text-xs font-light text-neutral-200 lg:text-sm'>
            Max. engine power
          </p>
        </div>
        <div className='3xl:right-26 absolute -right-4 -bottom-8 rounded-lg bg-neutral-500/10 p-3 text-center backdrop-blur-sm xl:right-16 2xl:-right-16 2xl:p-5 2xl:text-right'>
          <h3 className='font-semibold 2xl:text-2xl'>
            590 <span className='text-xs font-normal'>lb-ft</span>
          </h3>
          <p className='text-xs font-light text-neutral-200 lg:text-sm'>
            Max. engine torque
          </p>
        </div>
      </div>
    </section>
  );
}
