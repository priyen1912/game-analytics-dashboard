import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const DAUMAUChart = ({ data }) => (
  <div>
    <h3>Daily Active Users</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey="dau" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default DAUMAUChart;