import { Box } from '@mui/material';
import  React from 'react';
import DriveCard from './DriveCard';
import style from '../styles/drive.module.scss';
import { DisplayCardProps } from '../interfaces/drive';
import { cardDetailsprops } from '../interfaces/card';

export default function DisplayCard({ driveCardDetails }: DisplayCardProps) {
  return (
    <>
      <Box className={style.display}>
        {driveCardDetails.map((cardDetails: cardDetailsprops) => {
          return <DriveCard cardDetails={cardDetails} key={Math.random()} />;
        })}
      </Box>
    </>
  );
}
