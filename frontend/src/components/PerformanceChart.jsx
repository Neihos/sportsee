import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { usePerformance } from "../data/hooks/useUserData";
import styles from "../styles/components/PerformanceChart.module.scss";

export default function PerformanceChart({ userId }) {
  const { data, loading, error } = usePerformance(userId);

  if (loading) return <div className={styles["chart"]}>Chargement…</div>;
  if (error) return <div className={styles["chart"]}>Erreur : {error}</div>;

  // Reformatage des données pour Recharts
  const kindMap = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const formattedData = data.data.map((item) => ({
    value: item.value,
    kind: kindMap[item.kind],
  }));

  // Nouveau tableau pour le tri des données par rapport à la maquette figma
  const desiredOrder = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  const orderedData = desiredOrder.map((kind) =>
    formattedData.find((item) => item.kind === kind)
  );

  return (
    <div className={styles["chart"]}>
      <ResponsiveContainer width="100%" aspect={0.981752}>
        <RadarChart data={orderedData} outerRadius="65%">
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#fff" }}
            tickLine={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            stroke="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
