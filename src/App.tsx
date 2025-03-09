import React from 'react';
import logo from './assets/chutaman.png';
import backGround from './assets/riftenhoneysidelogo350riften1000.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/home/home';
import Gallery from './pages/gallery/gallery';
import Info from './pages/info/info';
import Music from './pages/music/music';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/web-site-for-band" element={<Home />}/>
          <Route path="/info" element={<Info />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        <header className="App-header">
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <div className="App-link-container">
            <Link to="/" className=".App-link-site">
              Home
            </Link>
              /  
            <Link to="/info" className=".App-link-site">
              Info
            </Link>
              /  
            <Link to="/gallery" className=".App-link-site">
              Gallery
            </Link>
              /
            <Link to="/music" className=".App-link-site">
              Music
            </Link>
          </div>
          <br />
        </header>
      </div>
    </Router>
  );
}


export default App;
