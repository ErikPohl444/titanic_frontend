import React, { useState} from "react";
import "./App.css";
import TitanicData from "./titanic.json";
import Counter from "./Counter";
import GenderToggle from "./GenderToggle";
import SurvivedToggle from "./SurvivedToggle";

function App() {
  const [toggleState, setToggleState] = useState<number>(0);
  const [genderToggleState, setGenderToggleState] = useState<string>("male");

  const handleToggleChange = (newValue: number) => {
    setToggleState(newValue);
  };

  const handleGenderToggleChange = (newValue: string) => {
    setGenderToggleState(newValue);
  };

  const survivedGenderFilteredData = TitanicData.filter(
    (item) =>
      Number(item.Survived) === toggleState && item.Sex === genderToggleState
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toggle whether survived or did not </h1>
        <SurvivedToggle initialValue={toggleState} onToggle={handleToggleChange} />
        <h1>Toggle gender</h1>
        <GenderToggle
          initialValue={genderToggleState}
          onToggle={handleGenderToggleChange}
        />

        <h1>Filtered count {survivedGenderFilteredData.length}</h1>
        <h2>TitanicCounter</h2>
        <Counter data={survivedGenderFilteredData} />
      </header>
    </div>
  );
}

export default App;
