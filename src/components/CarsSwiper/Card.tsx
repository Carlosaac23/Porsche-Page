import { ChevronsUp, Gauge, Fuel, Zap } from 'lucide-react';

type CardProps = {
  brand: string;
  model: string;
  img: string;
  acceleration: string;
  topSpeed: string;
  fuelGas: string;
  price: string;
};

export default function Card({ brand, model, img, acceleration, topSpeed, fuelGas, price }: CardProps) {
  return (
    <div className='max-w-2xs flex flex-col items-center text-center p-5 mb-16 border border-neutral-800 rounded-lg hover:border-neutral-500 cursor-pointer'>
      <h2 className='font-bold text-lg'>{brand}</h2>
      <h3 className='font-light text-xs text-neutral-400'>{model}</h3>
      <img className='mb-4 hover:translate-x-1.5 duration-200 ease-out' src={img} alt='Imagen del auto' />
      <ul className='flex justify-center gap-3 mb-2'>
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
