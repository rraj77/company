import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { contextProvider } from "../context/Context";

export default function Users() {
  const { setOpenModal } = useContext(contextProvider);
  return (
    <Box>
      <Typography variant="h5" >Users</Typography>
      <Button onClick={() => setOpenModal(true)}>open</Button>
    </Box>
  );
}
