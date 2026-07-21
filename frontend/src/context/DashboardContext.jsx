import { createContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {

  const [stats, setStats] = useState({
    passwordsGenerated: 0,
    passwordsAnalyzed: 0,

    totalScore: 0,
    totalEntropy: 0,

    strongPasswords: 0,
    weakPasswords: 0,

    recentActivity: [],

    risk: {
      critical: 0,
      high: 0,
      medium: 0,
      strong: 0,
    },
  });

  function addGeneratedPassword(score, entropy) {

    setStats((prev) => ({

      ...prev,

      passwordsGenerated:
        prev.passwordsGenerated + 1,

      totalScore:
        prev.totalScore + score,

      totalEntropy:
        prev.totalEntropy + entropy,

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

      passwordsAnalyzed:
        prev.passwordsAnalyzed + 1,

      totalScore:
        prev.totalScore + score,

      totalEntropy:
        prev.totalEntropy + entropy,

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

  return (

    <DashboardContext.Provider

      value={{

        stats,

        addGeneratedPassword,

        addAnalyzedPassword,

      }}

    >

      {children}

    </DashboardContext.Provider>

  );

}