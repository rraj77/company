import React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import DisplayCard from "./DisplayCard";

function Drive() {
  return (
    <Box textAlign={"end"}>
      <Button variant="contained" size="small">
        Upload
      </Button>

      <Box>
        <DisplayCard />
      </Box>
    </Box>
  );
}
export default Drive;
