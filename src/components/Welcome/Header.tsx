import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className='flex justify-between items-center py-8'>
      <Link to={'/'}>
        <img className='w-10' src='/porsche.svg' alt='Porsche Logo' />
      </Link>

      {/* Menu Desktop */}
      <ul className='hidden md:flex list-none gap-10 font-medium text-md xl:text-lg'>
        <li>
          <Link className='hover:text-neutral-400' to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:text-neutral-400' to={'/about'}>
            About
          </Link>
        </li>
        <li>
          <Link className='hover:text-neutral-400' to={'#'}>
            IDK
          </Link>
        </li>
        <li>
          <Link className='hover:text-neutral-400' to={'/contact'}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile menu button */}
      {!isOpen && (
        <button className='md:hidden' onClick={toggleMenu} aria-label='toggle-menu'>
          <Menu className='cursor-pointer' size={28} color='#fafafa' />
        </button>
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 bg-neutral-950/50 backdrop-blur-sm text-neutral-50 p-5 z-100 md:hidden transform transition-all duration-200 ease-out' ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <button className='absolute top-8 right-8' onClick={toggleMenu} aria-label='close-menu'>
          <X className='cursor-pointer' size={28} color='#fafafa' />
        </button>

        <ul className='flex flex-col h-full items-center justify-center gap-14 font-semibold text-3xl'>
          <li>
            <Link onClick={() => setIsOpen(false)} to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to={'/about'}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to={'#'}>
              IDK
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to={'/contact'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
