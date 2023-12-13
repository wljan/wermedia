"use client"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import './animation.js';




function App() {
  

return(
  <BrowserRouter>
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  )}

  export default App;
