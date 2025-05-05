import React, { useState, useCallback } from "react";

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
  }, [survived, onToggle]);

  return (
    <button onClick={toggle} name="survival button">
      {survived ? "Survived" : "Did not survive"}
    </button>
  );
};

export default SurvivedToggle;
