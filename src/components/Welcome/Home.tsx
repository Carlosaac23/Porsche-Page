import { Fuel, ChevronsUp, Gauge, Power, ArrowBigUpDash } from 'lucide-react';
import { useState } from 'react';
import useSound from 'use-sound';
import porscheSound from '/audio/911-sound.mp3';

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
    <section className='flex flex-col items-center justify-center mt-10'>
      <h1 className='text-2xl md:text-3xl xl:text-4xl mb-2 font-bold'>Choose the best car</h1>
      <p className='text-sm xl:text-lg mb-2 text-neutral-400'>Porsche 911 Turbo S</p>
      <div className='flex items-center gap-2 mb-10'>
        <Fuel className='xl:w-5 xl:h-5' size={16} color='#fafafa' />
        <p className='font-semibold text-sm xl:text-md'>Engine Car</p>
      </div>

      <img className='w-full xl:w-3xl mb-6' src='/home.png' alt='Home Porsche image' />

      <div onClick={handleClick} className='p-4 mb-4 rounded-full hover:bg-neutral-700/15 duration-250 ease-out cursor-pointer'>
        <Power color='#fafafa' />
      </div>

      <ul className='w-full flex items-center justify-evenly mt-5'>
        <li className='flex flex-col items-center gap-1 w-20'>
          <ChevronsUp size={20} color='#fafafa' />
          <span className='text-xs'>2,7 s</span>
          <p className='text-sm font-extralight'>Acceleration</p>
        </li>
        <li className='flex flex-col items-center gap-1 w-20'>
          <Gauge size={20} color='#fafafa' />
          <span className='text-xs'>330 km/h</span>
          <p className='text-sm font-extralight'>Top Speed</p>
        </li>
        <li className='flex flex-col items-center gap-1 w-20'>
          <ArrowBigUpDash size={20} color='#fafafa' />
          <span className='text-xs'>650 hp</span>
          <p className='text-sm font-extralight'>Power</p>
        </li>
      </ul>
    </section>
  );
}
