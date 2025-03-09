import React from 'react';
import backGround from '../../assets/riftenhoneysidelogo350riften1000.png';
import './home.css';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="App-home">
      <br />
      <div>
        <img src={backGround} className="App-background" alt="backGround" />
        <p>
          riften vrchat screen shot
        </p>
        <a
          className="App-link"
          href="https://vrchat.com/home/group/grp_60978753-5608-4cab-bc83-fb33574fc6fd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Riften Group
        </a>
        <Outlet />
      </div>
    </div>
  )
}


export default Home;
