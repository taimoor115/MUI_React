import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [value, setValue] = useState(null);
  const open = Boolean(value);

  const handleClick = (e) => {
    setValue(e.currentTarget);
  };

  const handleClose = () => {
    setValue(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" size="large" edge="start">
          <CatchingPokemon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          POKEMON APP
        </Typography>

        <Stack direction="row" spacing={3}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon=<KeyboardArrowDown />
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>

        <Menu
          id="resources"
          anchorEl={value}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
        >
          <MenuItem>Start</MenuItem>
          <MenuItem>End</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
