import logo from '../assets/ProfessionalHeadshot.jpg';
import linkedin from '../assets/brand-linkedin.svg';
import github from '../assets/brand-github.svg';

function About() {
  return (
    <div className='w-screen h-1/2 text-xl flex-col items-center justify-center'>
      <h1 className='px-8 pt-8 text-stone-800 text-bold'>Hello, My name is Evan!</h1>
      <div className='p-8 h-1/2'>
        <img src={logo} className='h-32 border-2 border-stone-800 aspect-auto rounded-md'></img>
      </div>
      <h1 className='px-8 pb-4'>
        Aspiring IT professional with an understanding of both{' '}
        <span className=' font-bold'>On-Prem</span> deployments and{' '}
        <span className=' font-bold'>Cloud Technology</span>
      </h1>
      <div className='w-full h-fit px-8 flex flex-row items-center'>
        <a href='https://www.linkedin.com/in/evan-polk-6547412a0/' target='_blank'><img src={linkedin} className='h-8 pr-2'></img></a>
        <a href='https://www.github.com/EvanPolk' target='_blank'><img src={github} className='h-8 px-2'></img></a>
      </div>
    </div>
  );
}

export default About;
