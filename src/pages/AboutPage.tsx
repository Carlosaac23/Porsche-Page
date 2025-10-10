import Balancer from 'react-wrap-balancer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTopButton from '@/components/ScrollUp';

export default function AboutPage() {
	return (
		<>
			<ScrollToTopButton />
			<Header />
			<main className='my-16'>
				<section className='my-20'>
					<h2 className='mb-5 text-4xl xl:text-5xl'>
						<Balancer>The Icon of Performance</Balancer>
					</h2>
					<img
						className='mb-4 w-[90%] rounded-lg'
						src='/about-hero.webp'
						alt='A porsche 911 turbo s speeding'
					/>
					<p className='font-light text-neutral-400 text-sm xl:text-lg'>
						<Balancer>
							The Porsche 911 Turbo S represents the pinnacle of precision
							engineering and timeless design, standing as one of the most
							accomplished sports cars ever built. Every detail has been
							carefully crafted to deliver an extraordinary balance between
							everyday usability and breathtaking performance. Its unmistakable
							silhouette reflects over five decades of Porsche heritage, refined
							through continuous evolution while remaining true to its roots.
						</Balancer>
					</p>
				</section>

				<section className='my-20'>
					<h2 className='mb-5 text-right text-4xl xl:text-5xl'>
						<Balancer>Unmatched Power</Balancer>
					</h2>
					<img
						className='ml-auto w-[75%] rounded-lg'
						src='/about-design.webp'
						alt='A profile pic of porsche 911 turbo s'
					/>
					<p className='mt-5 text-right font-light text-neutral-400 text-sm xl:text-lg'>
						<Balancer>
							At the heart of the 911 Turbo S lies a 3.8-liter,
							twin-turbocharged flat-six engine, producing 640 horsepower and
							590 lb-ft of torque. Accelerating from 0 to 60 mph in just 2.6
							seconds, it sets the benchmark for supercar performance while
							maintaining everyday drivability.
						</Balancer>
					</p>
				</section>

				<section className='my-20'>
					<h2 className='mb-5 text-4xl xl:text-5xl'>
						<Balancer>Design That Inspires</Balancer>
					</h2>
					<div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-[50%_50%] xl:w-5xl'>
						<img
							className='w-full rounded-lg sm:h-96 sm:object-cover'
							src='/interior.webp'
							alt=''
						/>
						<img
							className='w-full rounded-lg sm:h-96 sm:object-cover'
							src='/about-interior.webp'
							alt=''
						/>
					</div>
					<div className='mx-auto mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[30%_70%] xl:w-5xl'>
						<img
							className='w-full rounded-lg sm:h-96 sm:object-cover'
							src='/about-rear.webp'
							alt=''
						/>
						<img
							className='w-full rounded-lg sm:h-96 sm:object-cover'
							src='/about-design.webp'
							alt=''
						/>
					</div>
					<p className='mt-5 font-light text-neutral-400 text-sm xl:text-lg'>
						<Balancer>
							The 911 Turbo S combines iconic Porsche styling with modern
							aerodynamic refinements. Wide rear fenders, an adaptive spoiler,
							and striking LED lighting give it an unmistakable presence on the
							road. Inside, luxurious leather, carbon fiber accents, and
							advanced digital displays create a cockpit designed for both
							comfort and control.
						</Balancer>
					</p>
				</section>

				<section className='my-20'>
					<h2 className='mb-5 text-right text-4xl xl:text-5xl'>
						<Balancer>A Legacy of Innovation</Balancer>
					</h2>
					<img
						className='ml-auto w-[80%] rounded-lg'
						src='/about-timeline.webp'
						alt='A timeline of porsches 911 turbo s'
					/>
					<p className='mt-5 text-right font-light text-neutral-400 text-sm xl:text-lg'>
						<Balancer>
							For decades, the Porsche 911 has defined the sports car segment.
							The Turbo S stands at the peak of this evolution, carrying forward
							a tradition of innovation, performance, and timeless design.
							Owning a 911 Turbo S is not just about driving a car — it’s about
							being part of a legacy.
						</Balancer>
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
}
