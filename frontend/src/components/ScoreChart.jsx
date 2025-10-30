import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useUserData } from "../data/hooks/useUserData";
import styles from "../styles/components/ScoreChart.module.scss";

export default function ScoreChart({ userId }) {
  const { data, loading, error } = useUserData(userId);
  if (loading) return <div className={styles["card"]}>Chargement…</div>;
  if (error) return <div className={styles["card"]}>Erreur : {error}</div>;

  const ratio = data.score || 0;
  const percent = Math.round(ratio * 100);

  const fg = [
    { name: "progress", value: percent },
    { name: "rest", value: Math.max(0, 100 - percent) },
  ];
  const bg = [{ name: "bg", value: 100 }];

  return (
    <div className={styles["card"]}>
      <p className={styles["title"]}>Score</p>

      <div className={styles["chartBody"]}>
        <ResponsiveContainer width="100%" aspect={0.981752}>
          <PieChart>
            <circle cx="50%" cy="50%" r="30%" fill="#fff" />
            <Pie
              data={bg}
              dataKey="value"
              startAngle={90}
              endAngle={450}
              innerRadius="65%"
              outerRadius="70%"
              stroke="none"
            >
              <Cell className={styles["ringBg"]} />
            </Pie>

            <Pie
              data={fg}
              dataKey="value"
              startAngle={82}
              endAngle={450}
              innerRadius="65%"
              outerRadius="73%"
              cornerRadius={10}
              stroke="none"
            >
              <Cell className={styles["ringFg"]} />
              <Cell className={styles["ringRest"]} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.center}>
          <div className={styles["value"]}>{percent}%</div>
          <div className={styles["sub"]}>de votre</div>
          <div className={styles["sub"]}>objectif</div>
        </div>
      </div>
    </div>
  );
}
