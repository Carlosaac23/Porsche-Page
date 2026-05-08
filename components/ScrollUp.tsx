'use client';

import { ArrowUp } from 'lucide-react';

import { useToggleVisibility } from '@/hooks/useToggleVisibility';

export default function ScrollTopButton() {
  const { visible } = useToggleVisibility();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <button
          type='button'
          onClick={scrollToTop}
          className='fixed right-6 bottom-6 z-100 cursor-pointer rounded-lg bg-neutral-900 p-2 shadow-lg hover:bg-neutral-800'
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
