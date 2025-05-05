import React, { useState } from "react";

function BinaryToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return <button onClick={toggleHandler}>{isOn ? 1 : 0}</button>;
}

export default BinaryToggleButton;
