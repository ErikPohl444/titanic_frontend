import React, { useState } from "react";
import "./App.css";
import TitanicData from "./data/titanic.json";
import Counter from "./Tables/Counter";
import Toggle from "./Buttons/GenericToggleButton";
import log from "./Logging/Logger";
import NumericEdit from "./MiscInput/NumericInput";

function App() {
  interface Status {
    id: number;
    label: string;
  }

  const survivedStatusOptions: { value: Status; label: string }[] = [
    { value: { id: 1, label: "Did not survive" }, label: "Did not survive" },
    { value: { id: 2, label: "Survived" }, label: "Survived" },
  ];
  const genderStatusOptions: { value: Status; label: string }[] = [
    { value: { id: 1, label: "male" }, label: "male" },
    { value: { id: 2, label: "female" }, label: "female" },
  ];

  const [number, setNumber] = useState(0);

  const handleSurvivedToggleChange = (newValue: Status) => {
    setSurvivedToggleState(newValue);
  };

  const handleGenderToggleChange = (newValue: Status) => {
    setGenderToggleState(newValue);
  };

  const [survivedToggleState, setSurvivedToggleState] = useState<Status>(
    survivedStatusOptions[0].value
  );

  const [genderToggleState, setGenderToggleState] = useState<Status>(
    genderStatusOptions[0].value
  );

  const survivedGenderFilteredData = TitanicData.filter(
    (item) =>
      Number(item.Survived) === survivedToggleState.id - 1 &&
      item.Sex === genderToggleState.label
  );

  const tableCellStyle = {
    border: "1px solid white",
    padding: "8px",
  };
  log.info("App component rendered");

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
                <Toggle
                  options={survivedStatusOptions}
                  defaultValue={survivedToggleState}
                  onChange={handleSurvivedToggleChange}
                  compareFn={(a, b) => a.id === b.id} // Compare Status objects by id
                />
              </td>
              <td style={tableCellStyle}>
                {" "}
                <Toggle
                  options={genderStatusOptions}
                  defaultValue={genderToggleState}
                  onChange={handleGenderToggleChange}
                  compareFn={(a, b) => a.id === b.id} // Compare Status objects by id
                />
              </td>
            </tr>
          </tbody>
        </table>
        <NumericEdit value={number} onChange={setNumber} />
        <p>Value: {number}</p>

        <h2>Filtered count {survivedGenderFilteredData.length}</h2>
        <h3>Data Scrolling</h3>
        <Counter data={survivedGenderFilteredData} />
      </header>
    </div>
  );
}

export default App;
