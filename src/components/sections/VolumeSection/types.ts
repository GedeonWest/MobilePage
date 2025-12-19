import { ValueCardProps } from '../../ui/value/ValueCard/types';
import { ProgressSegment } from '../../ui/progress/ProgressScale/types';

export type VolumeSectionProps = {
  heading?: string;
  leftLabel: string;
  rightLabel: string;
  leftCard: ValueCardProps;
  rightCard: ValueCardProps;
  segments?: ProgressSegment[];
  segmentLabels?: string[];
};


