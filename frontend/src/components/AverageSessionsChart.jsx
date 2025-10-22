import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useAverageSessions } from "../hooks/useUserData";
import styles from "../styles/components/AverageSessionsChart.module.scss";

const DAY_LABEL = ["", "L", "M", "M", "J", "V", "S", "D"]; // 1..7

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { index, value } = payload[0].payload;
  if (index === 0 || index === 8) return null; // ignore points fantômes
  return <div className={styles.tooltip}>{value} min</div>;
}

function CustomCursor({ points, width }) {
  const x = points?.[0]?.x ?? 0;
  const w = Math.max(0, width - x);
  return <rect x={x} y={0} width={w} height="100%" fill="rgba(0,0,0,0.1)" />;
}

export default function AverageSessionsChart({ userId }) {
  const { data, loading, error } = useAverageSessions(userId);
  if (loading) return <div className={styles.card}>Chargement…</div>;
  if (error) return <div className={styles.card}>Erreur : {error}</div>;

  // base 1..7
  const base = data.sessions.map((s) => ({
    index: s.day,
    value: s.sessionLength,
  }));
  // points fantômes (0 & 8) pour "déborder" et être coupé aux bords
  const first = base[0]?.value ?? 0;
  const last = base[base.length - 1]?.value ?? 0;
  const sessions = [
    { index: 0, value: first },
    ...base,
    { index: 8, value: last },
  ];

  return (
    <div className={styles["card"]}>
      <p className={styles["title"]}>Durée moyenne des sessions</p>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          margin={{ top: 0, right: 0, left: 0, bottom: 16 }}
        >
          <XAxis
            type="number"
            dataKey="index"
            domain={[0, 8]}
            ticks={[1, 2, 3, 4, 5, 6, 7]}
            tickFormatter={(i) => DAY_LABEL[i]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            tickMargin={1}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis hide domain={["dataMin-5", "dataMax+30"]} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={(props) =>
              // pas de dot actif sur 0 et 8
              props.payload.index === 0 || props.payload.index === 8 ? null : (
                <circle
                  cx={props.cx}
                  cy={props.cy}
                  r={4}
                  fill="#FFFFFF"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth={8}
                />
              )
            }
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
