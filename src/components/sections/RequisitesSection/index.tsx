import React from "react";
import {
  Box,
  Checkbox,
  InputAdornment,
  FormControlLabel,
  Paper,
  Radio,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import SectionHeading from "../../ui/typography/SectionHeading";
import InputFieldCard from "../../ui/form/InputFieldCard";
import { RequisitesSectionProps } from "./types";

const RadioIcon = styled("span")(() => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: "2px solid #000",
  display: "inline-block",
  boxSizing: "border-box",
}));

const RadioCheckedIcon = styled("span")(() => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: "2px solid #f5c400",
  backgroundColor: "#f5c400",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  "&::after": {
    content: '""',
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#000",
  },
}));

const RequisitesSection: React.FC<RequisitesSectionProps> = ({
  heading = "Реквизиты",
  saveLabel = "Сохранить реквизиты",
  saveChecked = true,
  documentOptions,
  primaryPlaceholder,
  extraFields = [],
}) => {
  const primaryChecked =
    documentOptions.find((opt) => opt.checked)?.value ?? documentOptions[0]?.value;

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
        flexWrap="wrap"
      >
        <SectionHeading title={heading} />
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="body2" color="text.secondary">
            {saveLabel}
          </Typography>
          <Checkbox
            defaultChecked={saveChecked}
            icon={<CheckOutlinedIcon className="checkbox-icon" />}
            checkedIcon={<CheckOutlinedIcon className="checkbox-icon" />}
            sx={{ p: 0, mr: 0.5 }}
          />
        </Stack>
      </Stack>

      <Paper variant="outlined" className="form-card">
        <Stack direction="row" alignItems="center" gap={2} flexWrap="wrap" mb={1}>
          {documentOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Radio
                  checked={primaryChecked === option.value}
                  icon={<RadioIcon />}
                  checkedIcon={<RadioCheckedIcon />}
                  color="default"
                />
              }
              label={<Typography variant="body2">{option.label}</Typography>}
            />
          ))}
        </Stack>
        <TextField
          fullWidth
          placeholder={primaryPlaceholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ color: "#000000" }}>
                <EditOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Stack spacing={1.5} mt={1.5}>
        {extraFields.map((field) => (
          <InputFieldCard
            key={field.placeholder}
            placeholder={field.placeholder}
            adornment={field.adornment}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default RequisitesSection;
