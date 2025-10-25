import styles from "../styles/components/NutrientTotals.module.scss"

export default function NutrientTotals({icone, result, nutrientName}) {
  return (
    <div className={styles["bloc"]}>
      <img src={icone} alt="" />
      <div className={styles["bloc__nutrientTotals"]}>
        <span className={styles["bloc__nutrientTotals__result"]}>{result}</span>
        <span className={styles["bloc__nutrientTotals__name"]}>
          {nutrientName}
        </span>
      </div>
    </div>
  );
}
