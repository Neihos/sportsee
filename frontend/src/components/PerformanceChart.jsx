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

  // Ordre attendu par la maquette (utilise les clés EN des données)
  const order = [
    "intensity",
    "speed",
    "strength",
    "endurance",
    "energy",
    "cardio",
  ];
  const orderIndex = order.reduce((acc, k, i) => ((acc[k] = i), acc), {});

  // Traduction EN -> FR pour l'affichage des ticks
  const fr = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  // Trie sans perdre d’entrées et sans produire d'undefined
  const base = Array.isArray(data?.data) ? data.data : [];
  const orderedData = [...base].sort(
    (a, b) => (orderIndex[a?.kind] ?? 999) - (orderIndex[b?.kind] ?? 999)
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
            tickFormatter={(k) => fr[k] ?? k}
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
