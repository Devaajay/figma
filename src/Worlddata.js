import "./css/worlddata.css";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 130, y: 230, z: 230 },
  { x: 160, y: 160, z: 260 },
  { x: 70, y:130, z: 100 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 }
];
const data02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 }
];

export default function Worlddata() {
  return (
    <div className="worlddata">
    <ScatterChart
      width={900}
      height={550}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="Bengaluru"  />
      <YAxis
        yAxisId="left"
        type="number"
        dataKey="y"
         name="weight"
        // unit="kg"
        stroke="#8884d8"
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
      {/* <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" /> */}
    </ScatterChart>
    </div>
  );
}