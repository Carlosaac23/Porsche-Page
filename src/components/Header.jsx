import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='flex justify-between items-center py-8'>
      <a className='flex items-center gap-3' href='#home'>
        <img className='w-9' src='/porsche.svg' alt='Porsche Logo' />
        <span className='font-bold'>Porsche</span>
      </a>

      {/* Menu Desktop */}
      <ul className='hidden md:flex list-none gap-10 font-semibold text-md xl:text-lg'>
        <li>
          <a className='hover:text-neutral-300 duration-200 ease-in-out' href='#home'>
            Home
          </a>
        </li>
        <li>
          <a className='hover:text-neutral-300 duration-200 ease-in-out' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='hover:text-neutral-300 duration-200 ease-in-out' href='#popular'>
            Popular
          </a>
        </li>
        <li>
          <a className='hover:text-neutral-300 duration-200 ease-in-out' href='#featured'>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='mobile-menu'
            className='absolute top-0 right-0 left-0 bottom-0 bg-neutral-950 text-neutral-50 p-5 md:hidden'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
