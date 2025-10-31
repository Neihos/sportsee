import { useState, useEffect } from "react";
import "../styles/pages/Profil.scss"

export default function Profil() {
  const [userId, setUserId] = useState(
    () => Number(localStorage.getItem("uid")) || 12
  );

  useEffect(() => {
    localStorage.setItem("uid", String(userId));
  }, [userId]);

  const handleToggle = (e) => {
    setUserId(e.target.checked ? 18 : 12);
  };

  return (
    <main id="profilPage">
      <span>Changement de profil :</span>
      <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
        <input
          type="checkbox"
          id="filter"
          checked={userId === 18}
          onChange={handleToggle}
        />
        <span>Karl</span>
        <span>Cecilia</span>
      </label>
    </main>
  );
}
