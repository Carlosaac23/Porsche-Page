import Balancer from 'react-wrap-balancer';
import { toast } from 'sonner';

export default function Offers() {
	return (
		<section className='my-30'>
			<div className='md:flex md:items-center md:justify-around'>
				<div>
					<h2 className='mb-6 text-center font-bold 3xl:text-4xl text-lg sm:text-xl xl:text-2xl'>
						<Balancer>Do you want to receive special offers?</Balancer>
					</h2>
					<p className='mb-8 text-center font-light 3xl:text-base text-neutral-400 text-sm'>
						<Balancer>
							Be the first to receive all the information about our products and
							new cars by email by subscribing to our list of mail.
						</Balancer>
					</p>
					<button
						type='button'
						className='mx-auto mb-10 block cursor-pointer rounded-lg border border-neutral-800 px-7 py-4 font-semibold text-sm hover:border-neutral-500'
						onClick={() => toast.success("You've successfully subscribed")}
					>
						Subscribe now
					</button>
				</div>
				<div>
					<img className='xl:w-3xl' src='/profile.webp' alt='A porsche 911' />
				</div>
			</div>
		</section>
	);
}
