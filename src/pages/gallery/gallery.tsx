import React, { useEffect, useState } from 'react';
import './gallery.css';
import { Outlet } from 'react-router-dom';



const Gallery: React.FC = () => {
  const imagePaths = [
    'web-site-for-band/picture/1.png',
    'web-site-for-band/picture/2.png',
    'web-site-for-band/picture/3.png',
    'web-site-for-band/picture/4.png',
    'web-site-for-band/picture/5.png',
    'web-site-for-band/picture/6.png',
    'web-site-for-band/picture/7.png',
    'web-site-for-band/picture/8.png',
    'web-site-for-band/picture/9.png',
    'web-site-for-band/picture/10.png',
    'web-site-for-band/picture/11.png',
    'web-site-for-band/picture/12.png',
    'web-site-for-band/picture/13.png',
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
