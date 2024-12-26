import { useState } from 'react';
import Divider from './components/Divider';
import Router from './components/Router';
import Rotate from './components/Rotate';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState('home');
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <div className='hidden lg:flex h-screen w-screen'>
        <div className='flex flex-col w-1/2 h-full justify-between font-forum'>
          <Navbar changePage={setPage} changeTrigger={setTrigger} />
          <Router page={page} />
        </div>
        <div className='flex h-screen w-1/2 font-forum'>
          <Divider />
          <Rotate trigger={trigger} />
        </div>
      </div>
      <div className='flex flex-col h-screen w-screen lg:hidden'>
        <Navbar changePage={setPage} changeTrigger={setTrigger} />
        <div className='flex h-1/2 w-full font-forum'>
          <Rotate trigger={trigger} />
        </div>
        <div className='flex w-full h-1/2 justify-between font-forum'>
          <Router page={page} />
          <Divider />
        </div>
      </div>
    </>
  );
}

export default App;
