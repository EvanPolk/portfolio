import Home from './pages/Home';
import Infrastructure from './pages/Infrastructure';
import About from './pages/About';
import Contact from './pages/Contact';

interface Props {
  page: string;
}

function Pages({ page }: Props) {
  return (
    <div>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'infrastructure' && <Infrastructure />}
      {page === 'contact' && <Contact />}
    </div>
  );
}

export default Pages;
