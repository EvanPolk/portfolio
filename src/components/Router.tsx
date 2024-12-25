import Home from './pages/Home';
import Infrastructure from './pages/Infrastructure';
import About from './pages/About';

interface Props {
  page: string;
}

function Pages({ page }: Props) {
  return (
    <div>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'infrastructure' && <Infrastructure />}
    </div>
  );
}

export default Pages;
