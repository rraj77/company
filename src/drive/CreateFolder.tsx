import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { addFileFolder } from '../api/driveApi';
import { IDriveCreateFolder, IDriveFiles } from '../interfaces/drive';
import styles from '../styles/styles.module.scss';
import filefolder from '../image/filefolder.png';
import { useState } from 'react';

export default function CreateFolder({
  open,
  setOpen,
  files,
  setFiles,
  breadPath
}: IDriveCreateFolder) {
  const [name, setName] = useState<string>('');
  const ModelClose = () => {
    setOpen(false);
    setName('');
  };

  const onCreateFolder = async (name: string) => {
    const folder: IDriveFiles = {
      id: Math.random(),
      name: name,
      path: filefolder
    };
    try {
      const index = breadPath.length - 1;
      const data = await addFileFolder(folder, breadPath[index].id);
      if (data.status === 200) {
        setFiles([...files, data.data]);
      }
    } catch (error) {
      console.error(error);
    }
    ModelClose();
  };

  return (
    <Modal open={open} onClose={ModelClose} className={styles.modal}>
      <Box className={styles.popup_style}>
        <Typography sx={{ mt: 2 }}>Folder Name</Typography>
        <TextField
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
            sx={{ marginRight: '7px' }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={() => onCreateFolder(name)} color="success">
            Success
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
