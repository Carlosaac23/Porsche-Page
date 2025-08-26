import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      <a className='flex items-center gap-3' href='#home'>
        <img className='w-9' src='/porsche.svg' alt='Porsche Logo' />
        <span className='font-bold'>Porsche</span>
      </a>

      {/* Menu Desktop */}
      <ul className='hidden md:flex list-none gap-10 font-semibold text-md xl:text-lg'>
        <li>
          <a className='hover:text-neutral-400' href='#home'>
            Home
          </a>
        </li>
        <li>
          <a className='hover:text-neutral-400' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='hover:text-neutral-400' href='#popular'>
            Popular
          </a>
        </li>
        <li>
          <a className='hover:text-neutral-400' href='#featured'>
            Featured
          </a>
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
        className={`fixed top-0 right-0 left-0 bottom-0 bg-neutral-950/50 backdrop-blur-md text-neutral-50 p-5 z-100 md:hidden transform transition-all duration-200 ease-out' ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <button className='absolute top-8 right-8' onClick={toggleMenu} aria-label='close-menu'>
          <X className='cursor-pointer' size={28} color='#fafafa' />
        </button>

        <ul className='flex flex-col h-full items-center justify-center gap-14 font-bold text-3xl'>
          <li>
            <a onClick={() => setIsOpen(false)} href='#home'>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href='#about'>
              About
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href='#popular'>
              Popular
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href='#featured'>
              Featured
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
