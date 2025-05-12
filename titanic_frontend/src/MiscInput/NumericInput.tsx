// NumericEdit.tsx
import React, { ChangeEvent } from 'react';

interface NumericEditProps {
  value: number;
  onChange: (newValue: number) => void;
}

const NumericEdit: React.FC<NumericEditProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default NumericEdit;