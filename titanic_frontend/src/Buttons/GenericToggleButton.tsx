import React, { useState, useCallback } from 'react';

interface ToggleProps<T> {
  options: { value: T, label: string }[];
  defaultValue: T;
  onChange: (value: T) => void;
}

function Toggle<T>({ options, defaultValue, onChange }: ToggleProps<T>) {
  const [value, setValue] = useState<T>(defaultValue);

  const toggleValue = useCallback(() => {
    const nextIndex = (options.findIndex(option => option.value === value) + 1) % options.length;
    const newValue = options[nextIndex].value;
    setValue(newValue);
    onChange(newValue);
  }, [value, options, onChange]);

  const currentLabel = options.find(option => option.value === value)?.label || '';

  return (
    <button onClick={toggleValue}>
      {currentLabel}
    </button>
  );
}

export default Toggle;