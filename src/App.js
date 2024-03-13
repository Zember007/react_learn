import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import React from 'react';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/ui/navbar/Navbar';




function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' element={<Posts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
