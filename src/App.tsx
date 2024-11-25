import React, { useState } from 'react';
import Selector from './components/Selector/Selector';
import Descriptor from './components/Descriptor';

function App() {
  const [page, setPage] = useState('About');

  const onPageChange = (select: string) => {
    setPage(select);
  };

  return (
    <div className='w-[97vw] h-[95vh] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 bg-primary rounded-lg border-secondary border-2 shadow-lg'>
      <div className='flex'>
        <Selector selectedPage={page} onPageChange={onPageChange} />
        <Descriptor />
      </div>
    </div>
  );
}

export default App;
