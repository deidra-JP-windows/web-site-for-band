import React, { useEffect, useState } from 'react';
import './gallery.css';
import { Outlet } from 'react-router-dom';



const Gallery: React.FC = () => {
  const imagePaths = [
    'picture/1.png',
    'picture/2.png',
    'picture/3.png',
    'picture/4.png',
    'picture/5.png',
    'picture/6.png',
    'picture/7.png',
    'picture/8.png',
    'picture/9.png',
    'picture/10.png',
    'picture/11.png',
    'picture/12.png',
    'picture/13.png',
  ];
  
  const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
  };

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const reloadImage = () => {
    const image = getRandomImage();
    setImageSrc(image);
  };

  useEffect(() => {
    const image = getRandomImage();
    setImageSrc(image);
  }, []);

  return (
    <div className="App-gallery">
      <br />
      <div>
        <p onClick={reloadImage}>
          Random from SS. Click to reload.
        </p>
        {imageSrc && <img src={imageSrc}  className="App-background" alt="" />}
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
    </div>
  )
}


export default Gallery;
