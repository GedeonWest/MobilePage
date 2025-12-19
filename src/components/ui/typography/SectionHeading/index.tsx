import React from "react";
import { Typography } from "@mui/material";
import { SectionHeadingProps } from "./types";

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => (
  <Typography variant="h6" sx={{ fontWeight: 700 }}>
    {title}
  </Typography>
);

export default SectionHeading;
