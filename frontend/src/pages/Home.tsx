import Navbar from '../components/Navbar';
import About from '../components/About';
import Infrastructure from '../components/Infrastructure';

function Home() {
  return (
    <div className='w-screen h-screen font-dmsans bg-stone-300 overflow-visible'>
      <Navbar startPage='Home'/>
      <div className='h-fill'>
        <About />
        <Infrastructure />
      </div>
    </div>
  );
}

export default Home;
