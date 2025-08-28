export default function About() {
  return (
    <section className='my-30 lg:flex justify-around gap-14 3xl:' id='about'>
      <div className='relative w-fit mb-20'>
        <img className='w-full 2xl:w-2xl h-auto rounded-lg' src='/interior.webp' alt='Interior Porsche Image' />

        <div className='absolute -right-3 -bottom-5 lg:bottom-1 xl:-bottom-6 p-3 backdrop-blur-xs bg-neutral-500/10 rounded-lg text-center'>
          <h3 className='font-semibold'>
            1110 <span className='font-normal text-xs'>Nm</span>
          </h3>
          <p className='text-neutral-200 text-xs lg:text-sm font-light'>Up to 1110 Nm</p>
        </div>
      </div>
      <div className='lg:w-lg 3xl:w-3xl'>
        <h2 className='text-lg font-bold mb-6 md:text-xl lg:text-2xl'>Overfeel</h2>
        <p className='text-sm text-neutral-400 font-light text-balance mb-10 md:text-md lg:text-base'>
          The overwhelming thrill of standing before the Porsche 911 Turbo S: a masterpiece where engineering meets pure adrenaline. With breathtaking
          acceleration, uncompromising performance, and timeless design, it redefines what it means to drive a sports car. The extraordinary is no longer out of
          reach—it’s right in front of you.
        </p>
        <a href='#' className='font-semibold text-sm border border-neutral-800 py-4 px-7 rounded-lg hover:border-neutral-500'>
          More information
        </a>
      </div>
    </section>
  );
}
