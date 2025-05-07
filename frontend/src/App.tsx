import Navbar from './components/Navbar';
import About from './components/About';
import Infrastructure from './components/Infrastructure';

function App() {
  return (
    <>
      <div className='w-screen h-fit font-dmsans bg-stone-300 overflow-visible'>
        <Navbar />
        <About />
        <Infrastructure />
      </div>
    </>
  );
}

export default App;
