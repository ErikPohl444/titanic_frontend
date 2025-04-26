import React from 'react';
import logo from './logo.svg';
import './App.css';

interface ButtonProps {
  buttontext: string;

}

interface TableData {
  id: number;
  name: string;
  age: number;
  occupation: string;
}
 
 const data: TableData[] = [
  { id: 1, name: "John Doe", age: 30, occupation: "Engineer" },
  { id: 2, name: "Jane Smith", age: 25, occupation: "Designer" },
  { id: 3, name: "Peter Jones", age: 40, occupation: "Manager" },
 ];
 
 function DataTable()  {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.occupation}</td>
            <td>{item.occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
 };

function MyButton(props: ButtonProps) {
    function handleClick() {
      alert('You clicked me!');
    }

    return (
      <button onClick={handleClick}>{props.buttontext}</button>
    );
  }
  
function App() {
  let myname: string = "Erik";
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

        <h1>Hello, React with TypeScript and {myname}! yay</h1>
            <MyButton buttontext="click this button"/>
        <p>Click the button above!</p>
        <DataTable/>
      </header>
    </div>
  );
}

export default App;