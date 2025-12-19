export type ValueCardProps = {
  label: string;
  value: string;
  currency?: string;
  highlighted?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
};


