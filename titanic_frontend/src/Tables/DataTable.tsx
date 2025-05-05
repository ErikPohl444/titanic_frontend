import React from "react";
import { TableData } from "../Constants";

function DataTable({ data }: { data: TableData[] }) {
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
}

export default DataTable;
