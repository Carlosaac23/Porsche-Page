import { ArrowBigUpDash, ChevronsUp, Fuel, Gauge, Power } from 'lucide-react';
import { useState } from 'react';
import useSound from 'use-sound';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import porscheSound from '/911-sound.mp3';

export default function Home() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [startEngine, { stop }] = useSound(porscheSound, { volume: 0.3 });

	const handleClick = () => {
		if (isPlaying) {
			stop();
		} else {
			startEngine();
		}

		setIsPlaying(!isPlaying);
	};

	return (
		<section className='mt-10 flex flex-col items-center justify-center'>
			<h1 className='mb-2 font-semibold text-2xl md:text-3xl xl:text-4xl'>
				Choose the best car
			</h1>
			<p className='mb-2 text-neutral-400 text-sm xl:text-lg'>
				Porsche 911 Turbo S
			</p>
			<div className='mb-10 flex items-center gap-2'>
				<Fuel className='xl:h-5 xl:w-5' size={16} color='#fafafa' />
				<p className='font-semibold text-sm xl:text-md'>Engine Car</p>
			</div>

			<img
				className='mb-6 w-full xl:w-3xl'
				src='/profile.webp'
				alt='Home Porsche'
			/>

			<button
				type='button'
				className='mb-3 hover:cursor-pointer'
				onClick={handleClick}
			>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Power color='#fafafa' />
						</TooltipTrigger>
						<TooltipContent>
							<p className=''>Turn it on</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</button>

			<ul className='mt-5 flex w-full items-center justify-evenly'>
				<li className='flex w-20 flex-col items-center gap-1'>
					<ChevronsUp size={20} color='#fafafa' />
					<span className='text-xs'>2,7 s</span>
					<p className='font-extralight text-sm'>Acceleration</p>
				</li>
				<li className='flex w-20 flex-col items-center gap-1'>
					<Gauge size={20} color='#fafafa' />
					<span className='text-xs'>330 km/h</span>
					<p className='font-extralight text-sm'>Top Speed</p>
				</li>
				<li className='flex w-20 flex-col items-center gap-1'>
					<ArrowBigUpDash size={20} color='#fafafa' />
					<span className='text-xs'>650 hp</span>
					<p className='font-extralight text-sm'>Power</p>
				</li>
			</ul>
		</section>
	);
}
