import Divider from './components/Divider';
import Picture from './components/Picture';
import Rotate from './components/Rotate';
function App() {
  return (
    <div className='h-screen w-screen flex'>
      <Picture />
      <div className='h-screen w-1/2 font-forum flex'>
        <Divider />
        <Rotate />
      </div>
    </div>
  );
}

export default App;
