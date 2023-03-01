import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Modal, Typography, TextField } from '@mui/material';
import style from '../styles/drive.module.scss';
import DisplayCard from './DisplayCard';
import audio from '../image/audio.png';
import video from '../image/video.png';
import image from '../image/image.png';
import natureimage from '../image/nature.webp';
import zipimage from '../image/zip.png';
import wallpaper from '../image/wallpaper.jpg';
import filefolder from '../image/filefolder.png';

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

function Drive() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>('');

  const ModelClose = () => {
    setOpen(false);
    setName('')
  };

  const getName = (name: string) => {
    const folder: { title: string; image: string } = {
      title: name,
      image: filefolder
    };
    driveCardDetails.unshift(folder);
    ModelClose();
    setName('');
  };

  return (
    <>
      <Modal
        open={open}
        onClose={ModelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={style.modal}>
        <Box className={style.popup_style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Folder Name
          </Typography>
          <TextField
            id="name-input"
            name="name"
            type="text"
            value={name}
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Box sx={{ paddingTop: '7px' }}>
            <Button
              variant="contained"
              onClick={ModelClose}
              color="error"
              sx={{ marginRight: '7px' }}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => getName(name)} color="success">
              Success
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ textAlign: 'end', display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          size="small"
          className={style.create_button}>
          Create Folder
        </Button>
        <Button variant="contained" size="small" className={style.upload_button}>
          Upload
        </Button>
      </Box>
      <DisplayCard driveCardDetails={driveCardDetails} />
    </>
  );
}
export default Drive;
