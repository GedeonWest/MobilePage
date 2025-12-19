import React from "react";
import { InputAdornment, Paper, TextField } from "@mui/material";
import { InputFieldCardProps } from "./types";

const InputFieldCard: React.FC<InputFieldCardProps> = ({ placeholder, adornment }) => (
  <Paper variant="outlined" className="input-card">
    <TextField
      fullWidth
      placeholder={placeholder}
      InputProps={{
        endAdornment: adornment ? (
          <InputAdornment position="end" sx={{ color: "#000000" }}>
            {adornment}
          </InputAdornment>
        ) : undefined,
      }}
    />
  </Paper>
);

export default InputFieldCard;
