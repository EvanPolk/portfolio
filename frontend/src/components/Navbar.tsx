import Hamburger from './Hamburger';

function Navbar() {
  return (
    <div className='flex items-center justify-between sticky h-20 w-full top-0 bg-stone-200 shadow z-40'>
      <h1 className='font-bold text-stone-800 text-2xl mx-8'>Evan Polk</h1>
      <Hamburger />
    </div>
  );
}

export default Navbar;
