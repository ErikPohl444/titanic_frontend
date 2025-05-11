import React, { useState, useCallback } from "react";
import log from "../Logging/Logger";


interface SurvivedToggleProps {
  initialValue: string;
  onToggle: (value: string) => void;
}

const SurvivedToggle: React.FC<SurvivedToggleProps> = ({
  initialValue,
  onToggle,
}) => {
  const [survived, setSurvived] = useState<string>(initialValue);

  const toggle = useCallback(() => {
    const newValue = survived === "Survived" ? "Did not survive" : "Survived";
    setSurvived(newValue);
    onToggle(newValue);
    log.info("SurvivedToggle component toggled to newValue", newValue);
  }, [survived, onToggle]);
  log.info("SurvivedToggle component rendered with initialValue", initialValue);
  return (
    <button onClick={toggle} name="survival button">
      {survived ? "Survived" : "Did not survive"}
    </button>
  );
};

export default SurvivedToggle;
