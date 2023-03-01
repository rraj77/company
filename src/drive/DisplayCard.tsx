import { Box } from '@mui/material';
import * as React from 'react';
import DriveCard from './DriveCard';
interface DisplayCardProps {
  driveCardDetails: Array<{ title: string, image: string}>
}

export default function DisplayCard({ driveCardDetails }: DisplayCardProps) {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto',
          gap: '2rem'
        }}>
        {driveCardDetails.map((cardDetails) => {
          return <DriveCard cardDetails={cardDetails} key={Math.random()} />;
        })}
      </Box>
    </>
  );
}
