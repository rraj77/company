import React from 'react';
import { Box } from '@mui/material';
import DriveCard from './DriveCard';
import style from '../styles/drive.module.scss';
import driveCard from './Constant';

export default function DisplayCard() {
  return (
    <Box className={style.display}>
      {driveCard.map((cardDetails) => {
        return <DriveCard cardDetails={cardDetails} key={Math.random()} />;
      })}
    </Box>
  );
}
