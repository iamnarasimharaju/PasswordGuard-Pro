import { createContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {

 const [stats, setStats] = useState({

  passwordsGenerated: 0,
  passwordsAnalyzed: 0,
  passwordsAudited: 0,

  totalScore: 0,
  totalEntropy: 0,

  strongPasswords: 0,
  mediumPasswords: 0,
  highPasswords: 0,
  criticalPasswords: 0,

  duplicates: 0,

  // NEW
  auditResults: [],

  recentActivity: [],

});

  function addGeneratedPassword(score, entropy) {

    setStats((prev) => ({

      ...prev,

      passwordsGenerated: prev.passwordsGenerated + 1,

      totalScore: prev.totalScore + score,

      totalEntropy: prev.totalEntropy + entropy,

      recentActivity: [

        {
          type: "Generated Password",
          score,
          time: new Date().toLocaleTimeString(),
        },

        ...prev.recentActivity,

      ].slice(0, 10),

    }));

  }

  function addAnalyzedPassword(score, entropy) {

    setStats((prev) => ({

      ...prev,

      passwordsAnalyzed: prev.passwordsAnalyzed + 1,

      totalScore: prev.totalScore + score,

      totalEntropy: prev.totalEntropy + entropy,

      recentActivity: [

        {
          type: "Analyzed Password",
          score,
          time: new Date().toLocaleTimeString(),
        },

        ...prev.recentActivity,

      ].slice(0, 10),

    }));

  }

  function updateAuditStatistics(results) {

    const total = results.length;

    const scoreSum = results.reduce(
      (sum, item) => sum + item.score,
      0
    );

    const entropySum = results.reduce(
      (sum, item) => sum + item.entropy,
      0
    );

    setStats((prev) => ({

      ...prev,

      passwordsAudited: total,

      totalScore: scoreSum,

      totalEntropy: entropySum,

      strongPasswords: results.filter(
        r => r.risk === "Strong"
      ).length,

      mediumPasswords: results.filter(
        r => r.risk === "Medium"
      ).length,

      highPasswords: results.filter(
        r => r.risk === "High"
      ).length,

      criticalPasswords: results.filter(
        r => r.risk === "Critical"
      ).length,

      duplicates: results.filter(
      r => r.duplicate
      ).length,

      auditResults: results,

      recentActivity: [
        {
          type: "Password Audit",
          score: Math.round(scoreSum / total),
          time: new Date().toLocaleTimeString(),
        },

        ...prev.recentActivity,

      ].slice(0, 10),

    }));

  }

  return (

    <DashboardContext.Provider

      value={{

        stats,

        addGeneratedPassword,

        addAnalyzedPassword,

        updateAuditStatistics,

      }}

    >

      {children}

    </DashboardContext.Provider>

  );

}