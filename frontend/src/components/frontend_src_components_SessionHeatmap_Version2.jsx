import React, { useEffect, useState } from "react";
import api from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SessionHeatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/analytics/session-heatmap").then(res => setData(res.data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="hour" label={{ value: "Hour", position: "insideBottomRight", offset: -5 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sessions" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}