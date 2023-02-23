import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface DriveCardProps {
  cardDetails: {
    title: string;
    image: string;
  };
}

const DriveCard = ({ cardDetails }: DriveCardProps) => {
  return (
    <>
      <Card sx={{ maxWidth: 200, maxHeight: 160, fontSize: 2 }}>
        <CardMedia sx={{ height: 110 }} image={cardDetails.image} title={cardDetails.title} />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {cardDetails.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DriveCard;
