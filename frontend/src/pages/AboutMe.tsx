import Navbar from '../components/Navbar';
import LinkedIn from '../assets/brand-linkedin.svg';
import Github from '../assets/brand-github.svg';
import { Link } from 'react-router';

function AboutMe() {
  return (
    <div className='w-screen h-fill font-dmsans bg-stone-300 overflow-visible'>
      <Navbar startPage='About-Me'/>
      <div className='w-screen h-1/2 flex-col items-center justify-center text-stone-800'>
        <h1 className='px-8 pt-8 font-bold text-3xl'>A little about me</h1>
        <div>
          <h1 className='px-8 pt-4 flex justify-center items-center'>Education</h1>
          <div className='h-0.5 w-fill mx-8 mt-2 bg-stone-800'></div>
          <h1 className='px-8 pt-4'><span className='font-bold'>B.S. in Computer Science</span> at Loyola University Chicago</h1>
        </div>
        <div>
          <h1 className='px-8 pt-4 flex justify-center items-center'>Experience</h1>
          <div className='h-0.5 w-fill mx-8 mt-2 bg-stone-800'></div>
          <h1 className='px-8 pt-4'>
            <span className='text-md flex justify-center items-center'>May 2025 - Present</span>
            <span className='font-bold'>ITS Service Desk Student Technician</span> at LUC
          </h1>
          <ol className='pl-10 pr-8 pt-4'>
            <div className='flex flex-row pt-2'>
              <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
              <h1>Managed over 100,000 alumni, faculty, staff, and students through Microsoft Azure</h1>
            </div>
            <div className='flex flex-row pt-2'>
              <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
              <h1>Communicated with clients, both over the phone and through email, to troubleshoot technical issues and escalate service requests.</h1>
            </div>
            <div className='flex flex-row pt-2'>
              <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
              <h1>Learned common troubleshooting techniques for over 150 university services including Microsoft 365, Global Protect VPN, and Microsoft Authenticator.</h1>
            </div>
          </ol>

          <h1 className='px-8 pt-4'>
            <span className='text-md flex justify-center items-center'>Aug. 2024 - May 2025</span>
            <span className='font-bold'>Computer Science Peer Tutor</span> at LUC
          </h1>
          <ol className='pl-10 pr-8 pt-4'>
            <div className='flex flex-row pt-2'>
              <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
              <h1>Communicated with both students and professors to help develop better methods of tutoring course material.</h1>
            </div>
            <div className='flex flex-row pt-2'>
              <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
              <h1>Provided instruction to students from diverse backgrounds, ranging from beginners with minimal experience to those with solid or advanced proficiency.</h1>
            </div>
            <div className='flex flex-row pt-2 pb-2'>
              <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
              <h1>Monitored and assessed student progress, providing individualized feedback and tailored support.</h1>
            </div>
          </ol>
        </div>

        <div>
          <h1 className='px-8 py-4'>Want to learn more? Reach out through LinkedIn or Explore my Github!</h1>
          <div className='w-full h-fit px-8 pb-4 flex flex-row items-center'>
            <a href='https://www.linkedin.com/in/evan-polk-6547412a0/' target='_blank'><img src={LinkedIn} className='h-8 pr-2'></img></a>
            <a href='https://www.github.com/EvanPolk' target='_blank'><img src={Github} className='h-8 px-2'></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
