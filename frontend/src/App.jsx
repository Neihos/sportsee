import {
  useUserData,
  useActivity,
  useAverageSessions,
  usePerformance,
} from "./hooks/useUserData";

export default function App() {
  const {
    data: user,
    loading: loadingUser,
    error: errorUser,
  } = useUserData(18);
  const {
    data: activity,
    loading: loadingActivity,
    error: errorActivity,
  } = useActivity(18);
  const {
    data: average,
    loading: loadingAverage,
    error: errorAverage,
  } = useAverageSessions(18);
  const {
    data: performance,
    loading: loadingPerf,
    error: errorPerf,
  } = usePerformance(18);

  if (loadingUser || loadingActivity || loadingAverage || loadingPerf)
    return <p>Chargement...</p>;

  if (errorUser || errorActivity || errorAverage || errorPerf)
    return (
      <p>Erreur : {errorUser || errorActivity || errorAverage || errorPerf}</p>
    );

  // Vérifie que tout s'affiche bien
  console.log("User :", user);
  console.log("Activity :", activity);
  console.log("Average Sessions :", average);
  console.log("Performance :", performance);

  return (
    <main>
      <h1>
        Bonjour <span>{user.userInfos.firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
    </main>
  );
}
