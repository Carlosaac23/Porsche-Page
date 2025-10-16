'use client';

import { ChevronsUp, Fuel, Gauge, Zap } from 'lucide-react';
import Image from 'next/image';

interface CardProps {
  brand: string;
  model: string;
  img: string;
  acceleration: string;
  topSpeed: string;
  fuelGas: string;
  price: string;
}

export default function Card(props: CardProps) {
  return (
    <div className='mb-16 flex max-w-2xs cursor-pointer flex-col items-center rounded-lg border border-neutral-800 p-5 text-center hover:border-neutral-500'>
      <h2 className='text-lg font-bold'>{props.brand}</h2>
      <h3 className='text-xs font-light text-neutral-400'>{props.model}</h3>
      <Image
        width={1000}
        height={10}
        className='mb-4 duration-200 ease-out hover:translate-x-1.5'
        src={props.img}
        alt='Imagen del auto'
      />
      <ul className='mb-2 flex justify-center gap-3'>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{props.acceleration} s</span>
          <ChevronsUp size={14} color='#fafafa' />
        </li>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{props.topSpeed} Km/h</span>
          <Gauge size={14} color='#fafafa' />
        </li>
        <div>
          {props.fuelGas.toLowerCase() === 'electric' ? (
            <li className='flex items-center gap-1'>
              <Zap size={14} color='#fafafa' />
              <span className='text-xs'>{props.fuelGas}</span>
            </li>
          ) : (
            <li className='flex items-center gap-1'>
              <Fuel size={14} color='#fafafa' />
              <span className='text-xs'>{props.fuelGas} l</span>
            </li>
          )}
        </div>
      </ul>
      <p className='text-sm font-bold'>USD {props.price}</p>
    </div>
  );
}
