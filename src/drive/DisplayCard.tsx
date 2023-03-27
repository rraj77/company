import React, { useState } from 'react';
import { Box } from '@mui/material';
import DriveCard from './DriveCard';
import style from '../styles/drive.module.scss';
import { IBreadPath, IDisplayCard, IDriveFiles } from '../interfaces/drive';
import { deleteFile, getAllFile } from '../api/driveApi';
import DriveBreadcrumb from './DriveBreadcrumb';
import UploadFile from './UploadFile';
import CreateFolder from './CreateFolder';

export default function DisplayCard({
  files,
  setFiles,
  uploadFile,
  setUploadFile,
  open,
  setOpen
}: IDisplayCard) {
  const onDeleteFile = async (id: number) => {
    const afterDeleteFiles = files.filter((file) => file.id !== id);
    try {
      const data = await deleteFile(id);
      if (data.status === 200) {
        setFiles(afterDeleteFiles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onOpenFileFolder = async (file: IDriveFiles) => {
    try {
      setBreadPath([...breadPath, { id: file.id, name: file.name }]);
      const data = await getAllFile(file.id);
      if (data.status === 200) {
        setFiles(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [breadPath, setBreadPath] = useState<IBreadPath[]>([{ id: 0, name: 'drive' }]);

  const handleClick = async (id: number) => {
    const index = breadPath.findIndex((item) => item.id === id);
    breadPath.splice(index + 1);

    const data = await getAllFile(id === 0 ? '' : id);
    if (data.status === 200) {
      setFiles(data.data);
    }
  };

  return (
    <>
      <DriveBreadcrumb breadPath={breadPath} handleClick={handleClick} />
      <CreateFolder
        open={open}
        breadPath={breadPath}
        setOpen={setOpen}
        files={files}
        setFiles={setFiles}
      />
      <UploadFile
        uploadFile={uploadFile}
        setUploadFile={setUploadFile}
        files={files}
        setFiles={setFiles}
        breadPath={breadPath}
      />
      <Box className={style.display}>
        {files.map((cardDetails) => {
          return (
            <DriveCard
              cardDetails={cardDetails}
              onDeleteFile={onDeleteFile}
              onOpenFileFolder={onOpenFileFolder}
              key={cardDetails.id}
            />
          );
        })}
      </Box>
    </>
  );
}
