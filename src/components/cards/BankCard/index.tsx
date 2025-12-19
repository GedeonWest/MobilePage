import React from "react";
import { Box, IconButton, Paper, Typography, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BankCardProps } from "./types";

const Card = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Avatar = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: "50%",
  backgroundColor: "#dbeafe",
  display: "grid",
  placeItems: "center",
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

const BankCard: React.FC<BankCardProps> = ({ title, rate, iconLabel = "P" }) => {
  return (
    <Card variant="outlined">
      <Avatar>{iconLabel}</Avatar>
      <Box flex={1}>
        <Typography fontWeight={400} variant="body1">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rate}
        </Typography>
      </Box>
      <IconButton>
        <KeyboardArrowDownIcon htmlColor="#000000" />
      </IconButton>
    </Card>
  );
};

export default BankCard;
