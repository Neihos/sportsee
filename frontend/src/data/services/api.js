import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

export async function getUserMainData(userId) {
  const res = await API.get(`/user/${userId}`);
  // return console.log(res)
  return res.data.data;
}

export async function getUserActivity(userId) {
  const res = await API.get(`/user/${userId}/activity`);
  return res.data.data;
}

export async function getUserAverageSessions(userId) {
  const res = await API.get(`/user/${userId}/average-sessions`);
  return res.data.data;
}

export async function getUserPerformance(userId) {
  const res = await API.get(`/user/${userId}/performance`);
  return res.data.data;
}