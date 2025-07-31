import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export async function login(username, password) {
  const res = await axios.post(`${API_URL}/auth/token`, {
    username,
    password,
  });
  return res.data;
}

export async function fetchDAU(token) {
  const res = await axios.get(`${API_URL}/analytics/dau`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function fetchRevenue(token) {
  const res = await axios.get(`${API_URL}/analytics/revenue`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}