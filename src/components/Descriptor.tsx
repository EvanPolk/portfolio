import React from 'react';
import Profile from '../assets/ProfessionalProfilePicture.png';

function Descriptor() {
  return (
    <div className='h-64 w-full flex justify-center items-center'>
      <img
        className='w-fit h-56 border-tertiary border-2 aspect-square object-cover object-top rounded-lg'
        src={Profile}
      ></img>
      <div className='text-black m-4 w-64'>
        <h2 className='text-black text-3xl font-bold'>Evan Polk</h2>
        <h2 className='text-xl font-bold'>Fullstack Engineer</h2>
        <h6 className='text-tertiary'>
          Loyola University Chicago Tutor with the Department of Computer
          Science.
        </h6>
      </div>
    </div>
  );
}

export default Descriptor;
