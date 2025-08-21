export default function About() {
  return (
    <section className='my-30 md:flex gap-14' id='about'>
      <div className='relative w-fit mb-20'>
        <img className='w-xs sm:w-2xl h-auto object-cover rounded-lg' src='/interior.webp' alt='Interior Porsche Image' />

        <div className='absolute -right-8 -bottom-8 md:-right-6 md:-bottom-6 p-4 backdrop-blur-sm bg-neutral-700/70 rounded-lg text-center'>
          <h3 className='font-bold'>1110 Nm</h3>
          <p className='text-sm font-light'>Up to 1110 Nm</p>
        </div>
      </div>
      <div className='md:w-lg'>
        <h2 className='text-lg font-bold mb-6 md:text-xl lg:text-2xl'>Overfeel</h2>
        <p className='text-sm text-neutral-400 font-light text-balance mb-10 md:text-md lg:text-base'>
          The overwhelming feeling of being in front of a 100% electric sports car: the new Taycan makes electricity even more electrifying. The performance is
          unparalleled and the extraordinary will leave you speechless.
        </p>
        <a href='#' className='font-semibold text-sm border border-neutral-800 py-4 px-7 rounded-lg hover:border-neutral-400 duration-200 ease-out'>
          More information
        </a>
      </div>
    </section>
  );
}
