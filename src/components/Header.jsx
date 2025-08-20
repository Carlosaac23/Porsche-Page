export default function Header() {
  return (
    <div className='flex justify-between items-center p-7'>
      <a className='flex items-center gap-3' href='#home'>
        <img className='w-11' src='/porsche.svg' alt='Porsche Logo' />
        <span>Porsche</span>
      </a>
      <ul className='flex list-none gap-10 font-semibold text-lg'>
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
    </div>
  );
}
