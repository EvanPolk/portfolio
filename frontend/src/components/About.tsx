import logo from '../assets/ProfessionalHeadshot.jpg';

function About() {
  return (
    <div className='w-screen h-[50vh] text-xl flex-col items-center justify-center'>
      <h1 className='p-8'>Hi! My name is Evan.</h1>
      <div className='h-1/3'>
        <img src={logo} className='h-full aspect-auto'></img>
      </div>
      <h1 className='p-8'>
        Aspiring IT professional with an understanding of both{' '}
        <span className=' font-bold'>On-Prem</span> deployments and{' '}
        <span className=' font-bold'>Cloud Technology</span>
      </h1>
    </div>
  );
}

export default About;
