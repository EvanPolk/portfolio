import path from '../assets/IMG_1275.jpeg';

function Picture() {
  return (
    <div className='w-1/2 h-full white flex flex-col-reverse'>
      <img className='w-3/4 h-auto mb-8 mx-8' src={path}></img>
      <p className='font-forum text-2xl mx-8 mb-4'>Evan Polk</p>
    </div>
  );
}

export default Picture;
