import { ChevronsUp, Gauge, Fuel, Zap } from 'lucide-react';

interface CardProps {
  brand: string;
  model: string;
  img: string;
  acceleration: string;
  topSpeed: string;
  fuelGas: string;
  price: string;
}

export default function Card({
  brand,
  model,
  img,
  acceleration,
  topSpeed,
  fuelGas,
  price,
}: CardProps) {
  return (
    <div className='mb-16 flex max-w-2xs cursor-pointer flex-col items-center rounded-lg border border-neutral-800 p-5 text-center hover:border-neutral-500'>
      <h2 className='text-lg font-bold'>{brand}</h2>
      <h3 className='text-xs font-light text-neutral-400'>{model}</h3>
      <img
        className='mb-4 duration-200 ease-out hover:translate-x-1.5'
        src={img}
        alt='Imagen del auto'
      />
      <ul className='mb-2 flex justify-center gap-3'>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{acceleration} s</span>
          <ChevronsUp size={14} color='#fafafa' />
        </li>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{topSpeed} Km/h</span>
          <Gauge size={14} color='#fafafa' />
        </li>
        <div>
          {fuelGas.toLowerCase() === 'electric' ? (
            <li className='flex items-center gap-1'>
              <Zap size={14} color='#fafafa' />
              <span className='text-xs'>{fuelGas}</span>
            </li>
          ) : (
            <li className='flex items-center gap-1'>
              <Fuel size={14} color='#fafafa' />
              <span className='text-xs'>{fuelGas} l</span>
            </li>
          )}
        </div>
      </ul>
      <p className='text-sm font-bold'>USD {price}</p>
    </div>
  );
}
