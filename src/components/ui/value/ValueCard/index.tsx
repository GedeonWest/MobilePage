import React from "react";
import { IconButton, Paper, Stack, Typography, styled } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ValueCardProps } from "./types";

const Card = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "highlighted",
})<{ highlighted?: boolean }>(({ theme, highlighted }) => ({
  flex: 1,
  borderColor: highlighted ? theme.palette.primary.main : "#e4e4e4",
  borderWidth: highlighted ? 2 : 1,
  borderStyle: "solid",
  borderRadius: highlighted ? 0 : theme.shape.borderRadius,
  boxSizing: "border-box",
  backgroundColor: theme.palette.common.white,
}));

const ValueCard: React.FC<ValueCardProps> = ({
  label,
  value,
  currency,
  highlighted,
  onIncrement,
  onDecrement,
}) => (
  <Card variant="outlined" highlighted={highlighted}>
    <Stack spacing={1} alignItems="center">
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        width="100%"
        justifyContent="space-between"
      >
        <IconButton size="small" onClick={onDecrement}>
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Stack spacing={0} alignItems="center" flex={1} minWidth={0}>
          <Typography variant="subtitle1" noWrap className="value-text">
            {value}
          </Typography>
          {currency && (
            <Typography variant="caption" color="text.secondary">
              {currency}
            </Typography>
          )}
        </Stack>
        <IconButton size="small" onClick={onIncrement}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  </Card>
);

export default ValueCard;
