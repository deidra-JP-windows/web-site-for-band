import React from 'react';
import './info.css';
import { Outlet } from 'react-router-dom';

const Info: React.FC = () => {
  return (
    <div className="App-info">
      <br />
      <div>
        <p>
          The Riften Group is a community centered around Vrchat.
        </p>
        <p>
          The one spinning is Chuttaman, an IQ 3
        </p>
        <Outlet />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}


export default Info;
