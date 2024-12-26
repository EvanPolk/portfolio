import path from '../../assets/IMG_1919.jpeg';

function About() {
  return (
    <div>
      <img src={path} className='w-3/4 m-8'></img>
      <p className='font-forum m-8 w-1/2'>
        Aspiring DevOps Engineer with a passion for infrastructure and
        development. Currently a Computer Science Tutor at Loyola University
        Chicago. If you're interested in learning more, contact me for an
        updated resume.
      </p>
      <div className='text-lg font-bold m-8 flex flex-col'>
        <a
          href='https://www.linkedin.com/in/evan-polk-6547412a0/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/EvanPolk'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default About;
