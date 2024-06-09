import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const BoxMui = () => {
  return (
    <div>
      <Box
        display="flex"
        sx={{
          padding: 3,
          color: "white",
          bgcolor: "red",
          width: "100px",
          height: "100px",
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            bgcolor: "gray",
          },
        }}
        component="div"
      >
        <Typography>Hey I'm Taimoor Hussain.</Typography>
      </Box>
    </div>
  );
};

export default BoxMui;
