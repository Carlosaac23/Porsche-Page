import { ChevronsUp, Gauge, Fuel } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Card({ brand, model, img, acceleration, topSpeed, fuelGas, price }) {
  return (
    <div
      className='max-w-2xs flex flex-col items-center p-5 mb-16 border border-neutral-800 rounded-lg hover:border-neutral-600 duration-200 ease-out cursor-pointer
    '
    >
      <h2 className='w-full text-left font-bold text-lg'>{brand}</h2>
      <h3 className='w-full text-left font-light text-xs text-neutral-400'>{model}</h3>
      <img className='mb-4 hover:translate-x-1.5 duration-200 ease-out' src={img} alt='Imagen del auto' />
      <ul className='w-full flex justify-start gap-3 mb-2'>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{acceleration} s</span>
          <ChevronsUp size={14} color='#fafafa' />
        </li>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{topSpeed} Km/h</span>
          <Gauge size={14} color='#fafafa' />
        </li>
        <li className='flex items-center gap-1'>
          <span className='text-xs'>{fuelGas} l</span>
          <Fuel size={14} color='#fafafa' />
        </li>
      </ul>
      <p className='w-full text-left text-sm font-bold'>USD {price}</p>
    </div>
  );
}

Card.propTypes = {
  brand: PropTypes.array.isRequired,
  model: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  acceleration: PropTypes.array.isRequired,
  topSpeed: PropTypes.array.isRequired,
  fuelGas: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
};
