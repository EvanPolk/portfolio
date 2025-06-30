import Hamburger from './Hamburger';
import { useState } from 'react';
import { NavLink } from 'react-router';

interface Props {
  startPage: string;
}

function Navbar({startPage}: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<string>(startPage);

  const handleOpen = () => {
    if (isOpen) {
      setOpen((isOpen) => !isOpen);
    } else {
      setOpen(true);
    }
  }

  return (
    <div className='relative'>
      <div className='flex items-center justify-between sticky h-20 w-full top-0 bg-stone-200 shadow z-40'>
        <h1 className='font-bold text-stone-800 text-2xl mx-8'>HomeLab</h1>
        <Hamburger isOpen={isOpen} handleClick={handleOpen}/>
      </div>
      <div className={`absolute h-64 w-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-75 backdrop-blur-sm shadow transition-all duration-300 ease-in-out transform ${!isOpen && '-translate-y-80'}`}></div>
      {/* This is for the blur effect only */}
      <div className={`absolute h-64 w-full backdrop-blur-sm transition-all duration-300 transform ${!isOpen && '-translate-y-80'}`}>
        <ol className='h-full w-full flex flex-col justify-evenly items-center font-bold text-stone-200 text-xl'>
          <NavLink to='/' onClick={() => setPage("Home")} className={page === "Home" ? 'text-stone-800' : 'transition-colors duration-300 hover:text-stone-800'}>Home</NavLink>
          <NavLink to='/HomeLab' onClick={() => setPage("HomeLab")} className={page === "HomeLab" ? 'text-stone-800' : 'transition-colors duration-300 hover:text-stone-800'}>HomeLab</NavLink>
          <NavLink to='/About-Me' onClick={() => setPage("About-Me")} className={page === "About-Me" ? 'text-stone-800' : 'transition-colors duration-300 hover:text-stone-800'}>About Me</NavLink>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
