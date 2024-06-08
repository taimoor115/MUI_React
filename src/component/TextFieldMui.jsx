import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const TextFieldMui = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };
  return (
    <Stack spacing={3}>
      <Stack direction={"row"} spacing={3}>
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={3}>
        <TextField label="Hello World" variant="outlined" required />
        <TextField label="Hello World" variant="outlined" required disabled />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
        />
        <TextField label="Read Only" variant="outlined" helperText="Hey" />

        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction={"row"}>
        <TextField
          label="Password"
          type={value ? "type" : "password"}
          size="small"
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClick}
                  aria-label="toggle password visibility"
                >
                  {value ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TextFieldMui;
