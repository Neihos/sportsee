import { useState, useEffect } from "react";
import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../services/dataClient";
import {
  UserDataNormalized,
  UserActivityNormalized,
  UserAverageNormalized,
  UserPerformanceNormalized,
} from "../models/normalizeData";

// hook

export function useUserData(userId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserMainData(userId);
        const result = new UserDataNormalized(user);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  return { data, error, loading };
}

export function useActivity(userId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserActivity(userId);
        const result = new UserActivityNormalized(user);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  return { data, error, loading };
}

export function useAverageSessions(userId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserAverageSessions(userId);
        const result = new UserAverageNormalized(user);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  return { data, error, loading };
}

export function usePerformance(userId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserPerformance(userId);
        const result = new UserPerformanceNormalized(user);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  return { data, error, loading };
}
