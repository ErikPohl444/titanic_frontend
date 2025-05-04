import React, { useState, useCallback } from 'react';
import "./App.css";
import TitanicData from "./titanic.json";
import Counter from "./Counter";
import { data } from "./Constants";
import DataTable from "./DataTable";
import MyButton from "./MyButton";
import GenericTable from "./GenericTable";

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
    <button onClick={toggle}>
      {isOn}
    </button>
  );
};
function App() {
  let myname: string = "Erik";

  let filteredItems = TitanicData.filter(item => item.Survived === "0");

  const [toggleState, setToggleState] = useState<number>(0);
  
  const handleToggleChange = (newValue: number) => {
    setToggleState(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle initialValue={toggleState} onToggle={handleToggleChange} />
        <h1>{toggleState}</h1>
        <h1>{TitanicData.filter(item => Number(item.Survived) === toggleState).length}</h1>
        <h2>TitanicCounter</h2>
        <Counter data={TitanicData.filter(item => Number(item.Survived) === toggleState)}/>

        <h2>Tabular</h2>
        <GenericTable data={TitanicData} />
      </header>
    </div>
  );
}

export default App;
