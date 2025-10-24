import { useState } from "react";
import { useUserData } from "../hooks/useUserData";
import ActivityChart from "../components/ActivityChart";
import "../styles/pages/Dashboard.scss";
import AverageSessionsChart from "../components/AverageSessionsChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";

export default function Dashboard() {
  const [userId] = useState(() => Number(localStorage.getItem("uid")) || 12);
  const { data: user, loading, error } = useUserData(userId);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <>
      <h1 className="dashboard__title">
        Bonjour <span>{user.userInfos.firstName}</span>
      </h1>
      <p className="dashboard__textForUser">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>

      <div className="dashboard__chartsContainer">
        <div className="dashboard__chartsContainer__left">
          <ActivityChart userId={userId} />
          <div className="dashboard__chartsContainer__left__bottom">
            <AverageSessionsChart userId={userId} />
            <PerformanceChart userId={userId} />
            <ScoreChart userId={userId} />
          </div>
        </div>
        <div className="dashboard__chartsContainer__right">
          <div className="blocErase"></div>
        </div>
      </div>
    </>
  );
}
