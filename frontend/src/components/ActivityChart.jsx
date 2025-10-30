import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useActivity } from "../data/hooks/useUserData";
import styles from "../styles/components/ActivityChart.module.scss";

function CustomTool({ active, payload }) {
  if (!active || !payload?.length) return null;
  const kg = payload.find((p) => p.dataKey === "kilogram")?.value;
  const cal = payload.find((p) => p.dataKey === "calories")?.value;
  return (
    <div className={styles.customTool}>
      <div>{kg}kg</div>
      <div>{cal}kCal</div>
    </div>
  );
}

export default function ActivityChart({ userId }) {
  const { data, loading, error } = useActivity(userId);
  if (loading)
    return <div className={styles["chart-activity"]}>Chargement…</div>;
  if (error)
    return <div className={styles["chart-activity"]}>Erreur : {error}</div>;

  const sessions = data.sessions.map((s, i) => ({ ...s, dayLabel: i + 1 }));

  return (
    <div className={styles["chart-activity"]}>
      <div className={styles["chart-activity__head"]}>
        <h3>Activité quotidienne</h3>
        <div className={styles.legend}>
          <div className={styles["legend__item"]}>
            <span
              className={`${styles["legend__dot"]} ${styles["legend__dot--kg"]}`}
            />
            <span className={styles["legend__label"]}>Poids (kg)</span>
          </div>
          <div className={styles["legend__item"]}>
            <span
              className={`${styles["legend__dot"]} ${styles["legend__dot--cal"]}`}
            />
            <span className={styles["legend__label"]}>
              Calories brûlées (kCal)
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" aspect={2.609375}>
        <BarChart
          data={sessions}
          barGap={8}
          margin={{ top: 20, right: 0, left: 20, bottom: 10 }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#DEDEDE"
          />
          <XAxis dataKey="dayLabel" tickLine={false} axisLine={false} dy={10} />
          <YAxis
            yAxisId={0}
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
          />
          <YAxis yAxisId={1} hide />
          <Tooltip
            cursor={{ fill: "rgba(196,196,196,0.4)" }}
            content={<CustomTool />}
          />
          <Bar
            yAxisId={0}
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId={1}
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
