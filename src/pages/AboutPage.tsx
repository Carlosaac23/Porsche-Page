import Footer from '@/components/Footer/Footer';
import ScrollToTopButton from '@/components/ScrollUp';
import Header from '@/components/Welcome/Header';
import Balancer from 'react-wrap-balancer';

export default function AboutPage() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <main className='my-16'>
        <section className='my-20'>
          <h2 className='text-4xl xl:text-5xl mb-5'>
            <Balancer>The Icon of Performance</Balancer>
          </h2>
          <img className='rounded-lg mb-4 w-[90%]' src='/about-hero.webp' alt='A porsche 911 turbo s speeding' />
          <p className='text-sm xl:text-lg text-neutral-400 font-light'>
            <Balancer>
              The Porsche 911 Turbo S represents the pinnacle of precision engineering and timeless design, standing as one of the most accomplished sports cars
              ever built. Every detail has been carefully crafted to deliver an extraordinary balance between everyday usability and breathtaking performance.
              Its unmistakable silhouette reflects over five decades of Porsche heritage, refined through continuous evolution while remaining true to its
              roots.
            </Balancer>
          </p>
        </section>

        <section className='my-20'>
          <h2 className='text-right text-4xl xl:text-5xl mb-5'>
            <Balancer>Unmatched Power</Balancer>
          </h2>
          <img className='rounded-lg w-[75%] ml-auto' src='/about-design.webp' alt='A profile pic of porsche 911 turbo s' />
          <p className='text-right text-sm xl:text-lg text-neutral-400 font-light mt-5'>
            <Balancer>
              At the heart of the 911 Turbo S lies a 3.8-liter, twin-turbocharged flat-six engine, producing 640 horsepower and 590 lb-ft of torque.
              Accelerating from 0 to 60 mph in just 2.6 seconds, it sets the benchmark for supercar performance while maintaining everyday drivability.
            </Balancer>
          </p>
        </section>

        <section className='my-20'>
          <h2 className='text-4xl xl:text-5xl mb-5'>
            <Balancer>Design That Inspires</Balancer>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-[50%_50%] gap-4 xl:w-5xl mx-auto'>
            <img className='w-full sm:h-96 sm:object-cover rounded-lg' src='/interior.webp' alt='' />
            <img className='w-full sm:h-96 sm:object-cover rounded-lg' src='/about-interior.webp' alt='' />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-[30%_70%] gap-4 mt-4 xl:w-5xl mx-auto'>
            <img className='w-full sm:h-96 sm:object-cover rounded-lg' src='/about-rear.webp' alt='' />
            <img className='w-full sm:h-96 sm:object-cover rounded-lg' src='/about-design.webp' alt='' />
          </div>
          <p className='text-sm xl:text-lg text-neutral-400 font-light mt-5'>
            <Balancer>
              The 911 Turbo S combines iconic Porsche styling with modern aerodynamic refinements. Wide rear fenders, an adaptive spoiler, and striking LED
              lighting give it an unmistakable presence on the road. Inside, luxurious leather, carbon fiber accents, and advanced digital displays create a
              cockpit designed for both comfort and control.
            </Balancer>
          </p>
        </section>

        <section className='my-20'>
          <h2 className='text-right text-4xl xl:text-5xl mb-5'>
            <Balancer>A Legacy of Innovation</Balancer>
          </h2>
          <img className='rounded-lg w-[80%] ml-auto' src='/about-timeline.webp' alt='A timeline of porsches 911 turbo s' />
          <p className='text-right text-sm xl:text-lg text-neutral-400 font-light mt-5'>
            <Balancer>
              For decades, the Porsche 911 has defined the sports car segment. The Turbo S stands at the peak of this evolution, carrying forward a tradition of
              innovation, performance, and timeless design. Owning a 911 Turbo S is not just about driving a car — it’s about being part of a legacy.
            </Balancer>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
