import { useState } from 'react';
import Divider from './components/Divider';
import Router from './components/Router';
import Rotate from './components/Rotate';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState('home');
  const [trigger, setTrigger] = useState(false);

  return (
    <div className='h-screen w-screen flex'>
      <div className='w-1/2 h-full white flex flex-col justify-between font-forum'>
        <Navbar changePage={setPage} changeTrigger={setTrigger} />
        <Router page={page} />
      </div>
      <div className='h-screen w-1/2 font-forum flex'>
        <Divider />
        <Rotate trigger={trigger} />
      </div>
    </div>
  );
}

export default App;
