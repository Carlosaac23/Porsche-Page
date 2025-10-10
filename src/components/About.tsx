import { useId } from 'react';
import { Link } from 'react-router-dom';
import Balancer from 'react-wrap-balancer';

export default function About() {
	const id = useId();
	return (
		<section className='3xl: my-30 justify-around gap-14 lg:flex' id={id}>
			<div className='relative mb-20 w-fit'>
				<img
					className='h-auto w-full rounded-lg 2xl:w-2xl'
					src='/interior.webp'
					alt='Interior Porsche'
				/>

				<div className='-right-3 -bottom-5 xl:-bottom-6 absolute rounded-lg bg-neutral-500/10 p-3 text-center backdrop-blur-sm lg:bottom-1'>
					<h3 className='font-semibold'>
						1110 <span className='font-normal text-xs'>Nm</span>
					</h3>
					<p className='font-light text-neutral-200 text-xs lg:text-sm'>
						Up to 1110 Nm
					</p>
				</div>
			</div>
			<div className='3xl:w-3xl lg:w-lg'>
				<h2 className='mb-6 font-bold text-lg md:text-xl lg:text-2xl'>
					Overfeel
				</h2>
				<p className='mb-10 font-light text-neutral-400 text-sm md:text-md lg:text-base'>
					<Balancer>
						The overwhelming thrill of standing before the Porsche 911 Turbo S:
						a masterpiece where engineering meets pure adrenaline. With
						breathtaking acceleration, uncompromising performance, and timeless
						design, it redefines what it means to drive a sports car. The
						extraordinary is no longer out of reach—it’s right in front of you.
					</Balancer>
				</p>
				<Link
					className='rounded-lg border border-neutral-800 px-7 py-4 font-semibold text-sm hover:border-neutral-500'
					to={'/about'}
				>
					More information
				</Link>
			</div>
		</section>
	);
}
