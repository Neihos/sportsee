import * as api from "./api";
import * as mock from "./mock";

const USE_MOCK = (import.meta.env.VITE_DATA_SOURCE || "api") === "mock";
// console.log("Source de données :", USE_MOCK ? "MOCK (local)" : "API (serveur)");

export const getUserMainData = (id) =>
  USE_MOCK ? mock.getUserMainData(id) : api.getUserMainData(id);
export const getUserActivity = (id) =>
  USE_MOCK ? mock.getUserActivity(id) : api.getUserActivity(id);
export const getUserAverageSessions = (id) =>
  USE_MOCK ? mock.getUserAverageSessions(id) : api.getUserAverageSessions(id);
export const getUserPerformance = (id) =>
  USE_MOCK ? mock.getUserPerformance(id) : api.getUserPerformance(id);
