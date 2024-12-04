import React, { useState } from 'react';
import Selector from '../components/Selector/Selector';
import Descriptor from '../components/Descriptor';
import TypeWriter from '../components/TypeWriter';

function About() {
  const [page, setPage] = useState('About');

  const onPageChange = (select: string) => {
    setPage(select);
  };

  return (
    <div className='w-[97vw] h-[95vh] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <div className='w-full h-1/2 flex'>
        <Selector selectedPage={page} onPageChange={onPageChange} />
        <Descriptor />
      </div>
      <div className='w-full h-1/2 bg-accent'></div>
    </div>
  );
}

export default About;
