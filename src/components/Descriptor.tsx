import React from 'react';

function Descriptor() {
  return (
    <div className='w-full h-32 flex justify-end'>
      <div className='text-accent m-4 w-1/4'>
        <h1 className='text-3xl font-bold'>Evan Polk</h1>
        <h2 className='text-xl font-bold'>Fullstack Engineer</h2>
        <ul className='text-secondary font-bold'>
          <li>Ambitious student making striking designs.</li>
          <li>
            Loyola University Chicago Tutor with the Department of Computer
            Science.
          </li>
          <li>
            Hobbiest in development infrastructure and computing system design.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Descriptor;
