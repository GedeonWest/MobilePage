export type ToggleOption = { label: string; value: string };

export type ToggleTabsProps = {
  options: ToggleOption[];
  value: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
};


