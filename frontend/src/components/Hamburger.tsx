interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

function Hamburger({ isOpen, handleClick}: Props) {
  return (
    <div className='h-16 w-16 m-8 bg-stone-200 hover:bg-stone-300 transition-colors duration-300 flex flex-col justify-center items-center rounded-full' onClick={handleClick}>
      <div className={`h-1 w-6 m-1 bg-stone-800 rounded-full transition-all duration-300 ease-in-out ${isOpen && 'origin-center rotate-45 translate-y-2'}`}></div>
      <div className={`h-1 w-6 bg-stone-800 rounded-full transition-all duration-300 ease-in-out ${isOpen && 'origin-center rotate-45'}`}></div>
      <div className={`h-1 w-6 m-1 bg-stone-800 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'origin-center -rotate-45 -translate-y-2' : ''}`}></div>
    </div>
  );
}

export default Hamburger;
