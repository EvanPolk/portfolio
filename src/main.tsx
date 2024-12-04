import { createRoot } from 'react-dom/client';
import './index.css';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<About />}></Route>
    </Routes>
  </BrowserRouter>
);
