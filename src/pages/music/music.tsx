import React, { useEffect, useState } from 'react';
import './music.css';
import { Outlet } from 'react-router-dom';

const Music: React.FC = () => {
  const videoIds = [
    'PLczTtyhBR9Oi3rdAN2xFqafXsXTnDmBHZ',
    'PLwt9h6ffqStO8hlaLDDGGNckvJ4x8PjpZ',
    'PLyepBoCR-qv24WQaZthmv4cRAcElHA9_P',
    'PLsZgDDPg0rB8WnJqykyPkrXYqgmpMFYBU',
    'PLPUygacvheSO0Hyj5Rh6BDZGhx2aOBOUb',
    'PLczTtyhBR9OigAddSk6pv3ClsVoTAJOZ1',
  ];

  const getRandomVideoId = (): string => {
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    return videoIds[randomIndex];
  };

  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const randomVideoId = getRandomVideoId();
    setVideoId(randomVideoId);
  }, []);

  const reloadVideo = () => {
    const randomVideoId = getRandomVideoId();
    setVideoId(randomVideoId);
  };

  return (
    <div className="App-music">
      <br />
      <div>
        <p onClick={reloadVideo}>
         play Random Video. Click to reload.                             
        </p>
        {videoId && (
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/videoseries?list=${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        )}
        <Outlet />
      </div>
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


export default Music;
