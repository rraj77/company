import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { contextProvider } from '../context/Context';

export default function Admin() {
  const { setOpenModal } = useContext(contextProvider);
  return (
    <Box>
      <Typography variant="h5">Admin</Typography>
      <Button onClick={() => setOpenModal(true)}>open</Button>
    </Box>
  );
}
