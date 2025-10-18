import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`${API}/user/18`);
        if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);

        const json = await response.json();
        setFirstName(json?.data?.userInfos?.firstName ?? "");
      } catch (err) {
        setError(err.message);
      }
    }

    fetchUser();
  }, []);

  if (error) return <p>Erreur : {error}</p>;
  if (!firstName) return <p>Chargement...</p>;

  return (
    <main>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
    </main>
  );
}
