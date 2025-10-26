import { USER_MAIN_DATA } from "../mocks/userMain";
import { USER_ACTIVITY } from "../mocks/userActivity";
import { USER_AVERAGE_SESSIONS } from "../mocks/userAverageSessions";
import { USER_PERFORMANCE } from "../mocks/userPerformance";

export async function getUserMainData(userId) {
  const found = USER_MAIN_DATA.find((u) => u.id === Number(userId));
  if (!found) throw new Error("Mock: utilisateur non trouvé");
  return found;
}

export async function getUserActivity(userId) {
  const found = USER_ACTIVITY.find((u) => u.userId === Number(userId));
  if (!found) throw new Error("Mock: activité non trouvée");
  return found;
}

export async function getUserAverageSessions(userId) {
  const found = USER_AVERAGE_SESSIONS.find((u) => u.userId === Number(userId));
  if (!found) throw new Error("Mock: séances moyennes non trouvées");
  return found;
}

export async function getUserPerformance(userId) {
  const found = USER_PERFORMANCE.find((u) => u.userId === Number(userId));
  if (!found) throw new Error("Mock: performance non trouvée");
  return found;
}
