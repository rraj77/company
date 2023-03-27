import React from 'react';
import { Card, Menu, MenuItem, IconButton } from '@mui/material';
import { CardMedia, CardContent, Typography } from '@mui/material';
import style from '../styles/drive.module.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { DriveCardProps } from '../interfaces/drive';

const DriveCard = ({ cardDetails, onDeleteFile, onOpenFileFolder }: DriveCardProps) => {
  const [toggleButton, setToggleButton] = React.useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  function mouseInHandler() {
    setToggleButton(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mouseOutHandler = () => {
    setToggleButton(false);
  };

  return (
    <>
      <Card
        className={style.card}
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onMouseEnter={mouseInHandler}
        onMouseLeave={mouseOutHandler}>
        <CardMedia
          sx={{ height: 110 }}
          image={cardDetails.path}
          title={cardDetails.path}
          onClick={() => onOpenFileFolder(cardDetails)}
        />

        <CardContent className={style.card_content}>
          <Typography gutterBottom variant="body2" component="div">
            {cardDetails.name}
          </Typography>
          {toggleButton ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Download</MenuItem>
                <MenuItem onClick={() => onDeleteFile(cardDetails.id)}>Delete</MenuItem>
              </Menu>
            </>
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};

export default DriveCard;
