import { useState, useEffect } from "react";

export default function Profil() {
  const [userId, setUserId] = useState(
    () => Number(localStorage.getItem("uid")) || 12
  );

  useEffect(() => {
    localStorage.setItem("uid", String(userId));
  }, [userId]);

  return (
    <>
      <span>Profil :</span>
      <button onClick={() => setUserId(12)} aria-pressed={userId === 12}>
        Karl
      </button>
      <button onClick={() => setUserId(18)} aria-pressed={userId === 18}>
        Cecilia
      </button>
    </>
  );
}
