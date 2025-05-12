import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import React from "react";
import { TitanicDataType } from "../Constants";

function BarChartComponent({ data }: { data: TitanicDataType[] }){
    const sortedData = [...data].sort(
      (a, b) => Number(a.Age) - Number(b.Age)
    ); // Sort in ascending order

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={sortedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="PassengerId" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Age" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
export default BarChartComponent;