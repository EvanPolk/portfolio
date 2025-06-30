import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './pages/Home.tsx'
import Homelab from './pages/Homelab.tsx';
import AboutMe from './pages/AboutMe.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/HomeLab' element={<Homelab/>}/>
        <Route path='/About-Me' element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
