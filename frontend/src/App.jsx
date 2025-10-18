import { useUserData } from "./hooks/useUserData";

export default function App() {
  const { data, loading, error } = useUserData(18);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <main>
      <h1>
        Bonjour <span>{data.userInfos.firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
    </main>
  );
}
