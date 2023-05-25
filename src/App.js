import React, { useState } from 'react';
import TextFrom from './components/TextFrom';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  const [mode, setDarkMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
    } else {
      setDarkMode('dark')
      document.body.style.backgroundColor = 'rgb(74 100 135)'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="FISTETHER" homeText="Home" aboutText="About" contectText="Contact Us" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/home" element={<TextFrom heading="Enter the text to analyse below" mode={mode} />}></Route>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
