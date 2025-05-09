import React from "react";
import log from "../Logging/Logger";

interface TableProps<T> {
  data: T[];
}

const GenericTable = <T extends Record<string, any>>({
  data,
}: TableProps<T>): any => {
  if (!data || data.length === 0) {
    log.info("GenericTable component rendered with no data");
    return <p>No data available.</p>;
  }

  const columns = Object.keys(data[0]);
  log.info("GenericTable component rendered with columns", columns);
  const tableCellStyle = {
    border: "1px solid white",
    padding: "8px",
  };

  return (
    <table style={{ border: "1px solid white", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td style={tableCellStyle} key={column}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;
