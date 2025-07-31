import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const RevenueTrend = ({ data }) => (
  <div>
    <h3>Revenue Trend</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueTrend;