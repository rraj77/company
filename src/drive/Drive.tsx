import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from '../styles/drive.module.scss';
import DisplayCard from './DisplayCard';
import { IDriveFiles } from '../interfaces/drive';
import { getAllFile } from '../api/driveApi';

function Drive() {
  const [open, setOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<boolean>(false);
  const [files, setFiles] = useState<IDriveFiles[]>([]);

  const getFiles = async () => {
    try {
      const data = await getAllFile('');
      if (data.status === 200) {
        setFiles(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      <Box sx={{ textAlign: 'end', display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          size="small"
          className={styles.create_button}
        >
          Create Folder
        </Button>
        <Button
          variant="contained"
          size="small"
          className={styles.upload_button}
          onClick={() => setUploadFile(true)}
        >
          Upload
        </Button>
      </Box>
      <DisplayCard
        files={files}
        setFiles={setFiles}
        uploadFile={uploadFile}
        setUploadFile={setUploadFile}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
export default Drive;
