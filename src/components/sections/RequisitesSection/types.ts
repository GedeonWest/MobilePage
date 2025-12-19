import React from 'react';

export type DocumentOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type ExtraField = {
  placeholder: string;
  adornment?: React.ReactNode;
};

export type RequisitesSectionProps = {
  heading?: string;
  saveLabel?: string;
  saveChecked?: boolean;
  documentOptions: DocumentOption[];
  primaryPlaceholder: string;
  extraFields?: ExtraField[];
};

