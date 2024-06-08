import { Button, Stack, ButtonGroup } from "@mui/material";

import { Send } from "@mui/icons-material";
const ButtonMui = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack direction={"row"}>
        <Button startIcon={<Send />}>Send</Button>
        <Button
          variant="contained"
          endIcon={<Send />}
          disableElevation
          disableRipple
        >
          Send
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          orientation="vertical"
          aria-label="alignement button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ButtonMui;
