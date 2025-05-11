import React, { useState, useCallback } from "react";
import log from "../Logging/Logger";
interface ToggleProps<T> {
  options: { value: T; label: string }[];
  defaultValue: T;
  onChange: (value: T) => void;
  compareFn?: (a: T, b: T) => boolean; // Optional custom comparison function
}

function Toggle<T>({
  options,
  defaultValue,
  onChange,
  compareFn,
}: ToggleProps<T>) {
  const [value, setValue] = useState<T>(defaultValue);

  const toggleValue = useCallback(() => {
    const currentIndex = options.findIndex((option) =>
      compareFn ? compareFn(option.value, value) : option.value === value
    );
    const nextIndex = (currentIndex + 1) % options.length;
    const newValue = options[nextIndex].value;
    setValue(newValue);
    onChange(newValue);
    log.info(`Toggle value changed to: ${newValue}`);
  }, [value, options, onChange, compareFn]);

  const currentLabel =
    options.find((option) =>
      compareFn ? compareFn(option.value, value) : option.value === value
    )?.label || "Unknown"; // Fallback to "Unknown" if no match is found
  log.info(`Current label: ${currentLabel}`);
  return <button onClick={toggleValue}>{currentLabel}</button>;
}

export default Toggle;
