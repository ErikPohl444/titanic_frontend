import React, { useState, useCallback } from "react";
import log from "../Logging/Logger";


interface SurvivedToggleProps {
  initialValue: number;
  onToggle: (value: number) => void;
}

const SurvivedToggle: React.FC<SurvivedToggleProps> = ({
  initialValue,
  onToggle,
}) => {
  const [survived, setSurvived] = useState<number>(initialValue);

  const toggle = useCallback(() => {
    const newValue = survived === 0 ? 1 : 0;
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
