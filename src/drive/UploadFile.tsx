import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import styles from './../styles/styles.module.scss';
import { IDriveFiles, IUploadFile } from '../interfaces/drive';
import { addFile } from '../api/driveApi';

export default function UploadFile({
  uploadFile,
  setUploadFile,
  setFiles,
  files,
  breadPath
}: IUploadFile) {
  const [file, setFile] = useState<IDriveFiles>({
    id: 0,
    name: '',
    path: ''
  });
  const [updoadFileData, setUpdoadFileData] = useState<File | null>(null);

  const [error, setError] = useState<boolean>(false);
  const handleClose = () => setUploadFile(false);
  const cancel = () => {
    handleClose();
    setFile({
      id: 0,
      name: '',
      path: ''
    });
  };

  const image = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = {
      id: Math.random(),
      name: e.target.value,
      path: URL.createObjectURL(e.target.files[0])
    };
    setUpdoadFileData(e.target.files[0]);
    setFile({ ...file });
    setError(false);
  };
  const save = async () => {
    if (file.id === 0) {
      setError(true);
    } else if (updoadFileData !== null) {
      handleClose();
      try {
        const index = breadPath.length - 1;
        console.log(index);
        const data = await addFile(updoadFileData, breadPath[index].id);
        if (data.status === 200) {
          setFiles([...files, data.data]);
          setUpdoadFileData(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box>
      <Modal keepMounted open={uploadFile} onClose={handleClose}>
        <Box className={styles.popup_style}>
          <Box component="form">
            <Typography variant="h5">Upload file</Typography>
            {file.path !== '' ? (
              <Box component="img" src={file.path} className={styles.img} />
            ) : null}

            <Box className={styles.input_field}>
              <TextField type="file" fullWidth size="small" onChange={image} />
              {error === true ? <div className={styles.form_error}>Please pload file</div> : null}
            </Box>
            <Box>
              <Button type="reset" onClick={cancel}>
                Cancel
              </Button>
              <Button
                className={styles.save_button}
                variant="contained"
                type="button"
                onClick={save}
              >
                save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
