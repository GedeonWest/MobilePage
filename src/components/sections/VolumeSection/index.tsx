import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import SectionHeading from "../../ui/typography/SectionHeading";
import ValueCard from "../../ui/value/ValueCard";
import ProgressScale from "../../ui/progress/ProgressScale";
import { VolumeSectionProps } from "./types";

const VolumeSection: React.FC<VolumeSectionProps> = ({
  heading = "Объемы",
  leftLabel,
  rightLabel,
  leftCard,
  rightCard,
  segments,
  segmentLabels,
}) => {
  const theme = useTheme();
  const isNarrow = useMediaQuery("(max-width:350px)");
  const cardsGap = isNarrow ? 0.5 : 1.5; // spacing units (4px vs 12px)

  return (
    <Box>
      <SectionHeading title={heading} />
      <Stack
        direction="row"
        justifyContent="space-between"
        mt={1}
        mb={1.5}
        gap={theme.spacing(1)}
        flexWrap="wrap"
      >
        <Typography variant="body2" color="text.secondary">
          {leftLabel}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rightLabel}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={cardsGap} flexWrap={isNarrow ? "wrap" : "nowrap"}>
        <Box flex={1} minWidth={0}>
          <ValueCard {...leftCard} />
        </Box>
        <Box flex={1} minWidth={0}>
          <ValueCard {...rightCard} />
        </Box>
      </Stack>
      <ProgressScale segments={segments} labels={segmentLabels} />
    </Box>
  );
};

export default VolumeSection;
