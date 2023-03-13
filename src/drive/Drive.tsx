import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Modal, Typography, TextField } from '@mui/material';
import style from '../styles/drive.module.scss';
import DisplayCard from './DisplayCard';
import filefolder from '../image/filefolder.png';
import driveCard from './Constant';
import { DisplayCardProps } from '../interfaces/drive';

function Drive() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>('');

  const ModelClose = () => {
    setOpen(false);
    setName('');
  };

  const getName = (name: string) => {
    const folder: DisplayCardProps = {
      title: name,
      image: filefolder
    };
    driveCard.unshift(folder);
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
      <DisplayCard />
    </>
  );
}
export default Drive;
