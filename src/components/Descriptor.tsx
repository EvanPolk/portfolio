import React from 'react';

function Descriptor() {
  return (
    <div className='w-full h-32 flex justify-end'>
      <div className='text-black m-4 w-1/4'>
        <h2 className='text-black text-3xl font-bold'>Evan Polk</h2>
        <h2 className='text-xl font-bold'>Fullstack Engineer</h2>
        <ul className='text-accent'>
          <li className='my-4'>
            Loyola University Chicago Tutor with the Department of Computer
            Science.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Descriptor;
