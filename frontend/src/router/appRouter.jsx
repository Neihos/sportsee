import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}
