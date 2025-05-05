import React, { useState, useCallback } from "react";

interface GenderToggleProps {
  initialValue: string;
  onToggle: (value: string) => void;
}

const GenderToggle: React.FC<GenderToggleProps> = ({
  initialValue,
  onToggle,
}) => {
  const [gender, setGender] = useState<string>(initialValue);

  const toggle = useCallback(() => {
    const newValue = gender === "male" ? "female" : "male";
    setGender(newValue);
    onToggle(newValue);
  }, [gender, onToggle]);

  return (
    <button onClick={toggle} name="gender button">
      {gender}
    </button>
  );
};

export default GenderToggle;
