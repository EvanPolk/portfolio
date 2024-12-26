import { SetStateAction } from 'react';

interface Props {
  changePage: React.Dispatch<SetStateAction<string>>;
  changeTrigger: React.Dispatch<SetStateAction<boolean>>;
}

function Navbar({ changePage, changeTrigger }: Props) {
  return (
    <>
      <div className='font-forum font-bold sm:text-sm lg:text-md xl:text-xl text-black w-full'>
        <button
          className='h-8 ml-8 m-4 px-2'
          onClick={() => changePage('home')}
        >
          Home
        </button>
        <button className='h-8 m-4 px-2' onClick={() => changePage('about')}>
          About
        </button>
        <button
          className='h-8 m-4 px-2'
          onClick={() => changePage('infrastructure')}
        >
          Infrastructure
        </button>
        <button className='h-8 m-4 px-2' onClick={() => changePage('contact')}>
          Contact
        </button>
        <button
          className='h-8 m-4 px-2'
          onClick={() => changeTrigger((prev) => !prev)}
        >
          Rerender Wave
        </button>
      </div>
    </>
  );
}

export default Navbar;
