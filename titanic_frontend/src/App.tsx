import React, { useState } from "react";
import "./App.css";
import TitanicData from "./data/titanic.json";
import Counter from "./Tables/Counter";
import GenderToggle from "./Buttons/GenderToggle";
import SurvivedToggle from "./Buttons/SurvivedToggle";
import Toggle from "./Buttons/GenericToggleButton";
import log from "./Logging/Logger";

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

  interface Status {
    id: number;
    label: string;
  }

  const statusOptions: { value: Status; label: string }[] = [
    { value: { id: 1, label: "Active" }, label: "Active" },
    { value: { id: 2, label: "Inactive" }, label: "Inactive" },
  ];

  const handleStatusChange = (newStatus: Status) => {
    console.log("Selected status:", newStatus);
  };

  const tableCellStyle = {
    border: "1px solid white",
    padding: "8px",
  };
  log.info("App component rendered");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Titanic Dataset Front-End Query Tool</h1>
        <Toggle
          options={statusOptions}
          defaultValue={statusOptions[0].value}
          onChange={handleStatusChange}
        />
        <h2>Filter by:</h2>
        <table
          style={{ border: "1px solid white", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td></td>
              <td style={tableCellStyle}>Status</td>
              <td style={tableCellStyle}>Biological Sex</td>
            </tr>
            <tr>
              <td></td>
              <td style={tableCellStyle}>
                {" "}
                <SurvivedToggle
                  initialValue={toggleState}
                  onToggle={handleToggleChange}
                />
              </td>
              <td style={tableCellStyle}>
                {" "}
                <GenderToggle
                  initialValue={genderToggleState}
                  onToggle={handleGenderToggleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Filtered count {survivedGenderFilteredData.length}</h2>
        <h3>Data Scrolling</h3>
        <Counter data={survivedGenderFilteredData} />
      </header>
    </div>
  );
}

export default App;
