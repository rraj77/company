import * as React from 'react';
import audio from '../image/audio.png';
import video from '../image/video.png';
import image from '../image/image.png';
import natureimage from '../image/nature.webp';
import zipimage from '../image/zip.png';
import wallpaper from '../image/wallpaper.jpg';
import DriveCard from './DriveCard';
import Box from '@mui/material/Box';

const driveCardDetails = [
  { title: 'audio.mp3', image: audio },
  { title: 'video.mp4', image: video },
  { title: 'image.png', image: image },
  { title: 'nature.webp', image: natureimage },
  { title: 'video.mp4', image: video },
  { title: 'zip.png', image: zipimage },
  { title: 'wallpaper', image: wallpaper },
  { title: 'audio.mp3', image: audio },
  { title: 'image.png', image: image },
  { title: 'audio.mp3', image: audio },
  { title: 'video.mp4', image: video },
  { title: 'image.png', image: image },
  { title: 'nature.webp', image: natureimage },
  { title: 'video.mp4', image: video },
  { title: 'zip.png', image: zipimage },
  { title: 'audio.mp3', image: audio }
];

export default function DisplayCard() {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto',
          gap: '2rem'
        }}
      >
        {driveCardDetails.map((cardDetails) => {
          return <DriveCard cardDetails={cardDetails} key={Math.random()} />;
        })}
      </Box>
    </>
  );
}
