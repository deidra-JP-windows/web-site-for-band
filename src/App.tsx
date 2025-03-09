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
          <Route path="/web-site-for-band" element={<Home />}/>
          <Route path="/web-site-for-band/info" element={<Info />} />
          <Route path="/web-site-for-band/gallery" element={<Gallery />} />
          <Route path="/web-site-for-band/music" element={<Music />} />
        </Routes>
        <header className="App-header">
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <div className="App-link-container">
            <Link to="/web-site-for-band" className=".App-link-site">
              Home
            </Link>
              /  
            <Link to="/web-site-for-band/info" className=".App-link-site">
              Info
            </Link>
              /  
            <Link to="/web-site-for-band/gallery" className=".App-link-site">
              Gallery
            </Link>
              /
            <Link to="/web-site-for-band/music" className=".App-link-site">
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
