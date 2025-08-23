import { ChevronsUp, Gauge, Fuel, Zap } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Card({ brand, model, img, acceleration, topSpeed, fuelGas, price }) {
  return (
    <div className='max-w-2xs flex flex-col items-center text-center p-5 mb-16 border border-neutral-800 rounded-lg hover:border-neutral-600 duration-200 ease-out cursor-pointer'>
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
        <li>
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
        </li>
      </ul>
      <p className='text-sm font-bold'>USD {price}</p>
    </div>
  );
}

Card.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  acceleration: PropTypes.string.isRequired,
  topSpeed: PropTypes.string.isRequired,
  fuelGas: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
