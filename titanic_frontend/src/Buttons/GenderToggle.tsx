import React, { useState, useCallback } from "react";
import log from "../Logging/Logger";


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
    log.info("GenderToggle component toggled to newValue", newValue);
  }, [gender, onToggle]);
  log.info("GenderToggle component rendered with initialValue", initialValue);
  return (
    <button onClick={toggle} name="genderbutton">
      {gender}
    </button>
  );
};

export default GenderToggle;
