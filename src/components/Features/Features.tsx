export default function Features() {
  return (
    <section className='my-30'>
      <h2 className='mb-20 font-semibold text-2xl sm:text-4xl text-center'>More Features</h2>
      <div className='relative'>
        <img className='rounded-lg w-[90%] md:w-xl lg:w-3xl 2xl:w-6xl mx-auto' src='/features.webp' alt='A porsche in the street' />
        <div className='absolute -top-8 -left-4 xl:left-16 2xl:-left-14 3xl:left-24 rounded-lg p-3 2xl:p-5 bg-neutral-500/10 backdrop-blur-sm text-center 2xl:text-left'>
          <h3 className='font-semibold 2xl:text-2xl'>
            650 <span className='font-normal text-xs'>hp</span>
          </h3>
          <p className='text-neutral-200 text-xs lg:text-sm font-light'>Max. engine power</p>
        </div>
        <div className='absolute -bottom-8 -right-4 xl:right-16 2xl:-right-16 3xl:right-26 rounded-lg p-3 2xl:p-5 bg-neutral-500/10 backdrop-blur-sm text-center 2xl:text-right'>
          <h3 className='font-semibold 2xl:text-2xl'>
            590 <span className='font-normal text-xs'>lb-ft</span>
          </h3>
          <p className='text-neutral-200 text-xs lg:text-sm font-light'>Max. engine torque</p>
        </div>
      </div>
    </section>
  );
}
