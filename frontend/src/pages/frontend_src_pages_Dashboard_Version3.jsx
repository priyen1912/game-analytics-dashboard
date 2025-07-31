import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchDAU, fetchRevenue } from "../services/api";
import DAUMAUChart from "../components/DAUMAUChart";
import RevenueTrend from "../components/RevenueTrend";

const Dashboard = () => {
  const { token } = useAuth();
  const [dau, setDAU] = useState([]);
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    if (token) {
      fetchDAU(token).then(setDAU);
      fetchRevenue(token).then(setRevenue);
    }
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <DAUMAUChart data={dau} />
      <RevenueTrend data={revenue} />
    </div>
  );
};

export default Dashboard;