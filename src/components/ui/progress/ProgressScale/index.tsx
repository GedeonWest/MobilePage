import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ProgressScaleProps } from "./types";

const ProgressScale: React.FC<ProgressScaleProps> = ({
  segments = [
    { color: "#0b0b0b" },
    { color: "#0b0b0b" },
    { color: "#e5e5e5" },
    { color: "#e5e5e5" },
  ],
  labels = ["min", "50%", "75%", "max"],
}) => (
  <Box mt={2}>
    <Stack direction="row" gap={1}>
      {segments.map((segment, idx) => (
        <Box key={idx} flex={1} display="flex" flexDirection="column" alignItems="center">
          <Box width="100%" height={8} bgcolor={segment.color} borderRadius={10} />
          <Typography
            mt={0.5}
            variant="caption"
            color="text.secondary"
            textAlign="center"
            display="block"
          >
            {labels[idx] ?? ""}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default ProgressScale;
