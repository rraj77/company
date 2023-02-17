import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const DriveCard = ({ cardDetails }: any) => {
  return (
    <>
      <Card sx={{ maxWidth: 200, maxHeight: 100 }}>
        <CardMedia
          sx={{ height: 50 }}
          image={cardDetails.image}
          title={cardDetails.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardDetails.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DriveCard;
