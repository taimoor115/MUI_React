import React from "react";
import { Grid } from "@mui/material";

const GridMui = () => {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 1, sm: 2, md: 4, lg: 5 }}
      direction="row"
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid item bgcolor="red">
        A
      </Grid>
      <Grid item bgcolor="gray">
        B
      </Grid>
      <Grid item bgcolor="blue">
        C
      </Grid>
      <Grid item bgcolor="violet">
        D
      </Grid>
      <Grid item bgcolor="blueviolet">
        E
      </Grid>
    </Grid>
  );
};

export default GridMui;
