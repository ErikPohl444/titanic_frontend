import React, { useState } from "react";
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

  const tableCellStyle = {
    border: "1px solid white",
    padding: "8px",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Titanic Dataset Front-End Query Tool</h1>
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
