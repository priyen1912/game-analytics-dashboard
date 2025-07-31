import React, { useEffect, useState } from "react";
import api from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RetentionFunnel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/analytics/retention").then(res => setData(res.data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="cohort" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="retained" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}