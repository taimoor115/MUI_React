import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const SwitchMui = () => {
  const [checked, setChecked] = useState("");

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        checked={checked}
        label="Dark Mode"
        control={<Switch />}
        onClick={handleChange}
      />
    </div>
  );
};

export default SwitchMui;
