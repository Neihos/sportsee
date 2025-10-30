export class UserDataNormalized {
  constructor(api = {}) {
    const { id = null, userInfos = {}, todayScore, score, keyData = {} } = api;

    const { firstName = "", lastName = "", age = null } = userInfos;

    // on choisit todayScore si présent, sinon score
    const finalScore = todayScore ?? score ?? 0;

    this.id = id;
    this.userInfos = { firstName, lastName, age };
    this.score = finalScore;
    this.keyData = {
      calorieCount: keyData.calorieCount ?? 0,
      proteinCount: keyData.proteinCount ?? 0,
      carbohydrateCount: keyData.carbohydrateCount ?? 0,
      lipidCount: keyData.lipidCount ?? 0,
    };
  }
}

export class UserActivityNormalized {
  constructor(api = {}) {
    const { userId = null, sessions = [] } = api;

    this.userId = userId;
    this.sessions = sessions.map((session) => ({
      day: session.day ?? "",
      kilogram: session.kilogram ?? null,
      calories: session.calories ?? null,
    }));
  }
}

export class UserAverageNormalized {
  constructor(api = {}) {
    const { userId = null, sessions = [] } = api;

    this.userId = userId;
    this.sessions = sessions.map((session) => ({
      day: session.day ?? null,
      sessionLength: session.sessionLength ?? null,
    }));
  }
}

export class UserPerformanceNormalized {
  constructor(api = {}) {
    const { userId = null, kind = {}, data = [] } = api;

    this.userId = userId;
    this.kind = kind;
    this.data = data.map((item) => ({
      value: item.value ?? 0,
      kind: item.kind ?? null,
    }));
  }
}