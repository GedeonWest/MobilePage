import React from "react";
import { ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, styled } from "@mui/material";
import { ToggleTabsProps } from "./types";

const Group = styled(ToggleButtonGroup)(({ theme }) => ({
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: theme.spacing(1.25),
}));

const ToggleTabs: React.FC<ToggleTabsProps> = ({ options, value, onChange, fullWidth = false }) => (
  <Group
    exclusive
    value={value}
    fullWidth={fullWidth as ToggleButtonGroupProps["fullWidth"]}
    onChange={(_, val) => {
      if (val && onChange) onChange(val);
    }}
  >
    {options.map((option) => (
      <ToggleButton key={option.value} value={option.value}>
        {option.label}
      </ToggleButton>
    ))}
  </Group>
);

export default ToggleTabs;
