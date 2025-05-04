import React, { useState, useCallback } from "react";
import "./App.css";
import TitanicData from "./titanic.json";
import Counter from "./Counter";

interface ToggleProps {
  initialValue: number;
  onToggle: (value: number) => void;
}

const Toggle: React.FC<ToggleProps> = ({ initialValue, onToggle }) => {
  const [isOn, setIsOn] = useState<number>(initialValue);

  const toggle = useCallback(() => {
    const newValue = isOn === 0 ? 1 : 0;
    setIsOn(newValue);
    onToggle(newValue);
  }, [isOn, onToggle]);

  return (
    <button onClick={toggle} name="survival button">
      {isOn ? "Survived" : "Did not survive"}
    </button>
  );
};
function App() {
  let myname: string = "Erik";

  let filteredItems = TitanicData.filter((item) => item.Survived === "0");

  const [toggleState, setToggleState] = useState<number>(0);

  const handleToggleChange = (newValue: number) => {
    setToggleState(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toggle whether survived or did not </h1>
        <Toggle initialValue={toggleState} onToggle={handleToggleChange} />
        <h1>
          Filtered count{" "}
          {
            TitanicData.filter((item) => Number(item.Survived) === toggleState)
              .length
          }
        </h1>
        <h2>TitanicCounter</h2>
        <Counter
          data={TitanicData.filter(
            (item) => Number(item.Survived) === toggleState
          )}
        />
      </header>
    </div>
  );
}

export default App;
