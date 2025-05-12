import React, { ChangeEvent } from "react";

interface NumericEditProps {
  value: number;
  placeholder?: string;
  onChange: (newValue: number) => void;
}

const NumericEdit: React.FC<NumericEditProps> = ({ value, placeholder, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
    else {        
        onChange(0);
    }
  };

  return <input type="text" value={`${value}`} placeholder={placeholder} onChange={handleChange} />;
};

export default NumericEdit;
