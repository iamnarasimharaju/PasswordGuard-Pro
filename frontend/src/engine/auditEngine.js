import { analyze } from "../services/analyzerService";

export function auditPasswords(input) {

  // Split input into lines
  const passwords = input
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const passwordCount = {};

  passwords.forEach((password) => {
    passwordCount[password] = (passwordCount[password] || 0) + 1;
  });

  const results = passwords.map((password) => {

    const analysis = analyze(password);

    const score = analysis.custom.score.score;

    let risk = "Strong";

    if (score < 40) {

      risk = "Critical";

    } else if (score < 60) {

      risk = "High";

    } else if (score < 80) {

      risk = "Medium";

    }

    return {

      password,

      score,

      entropy: Math.round(
        analysis.custom.entropy.entropy
      ),

      crackTime:
        analysis.custom.crackTime.offlineGPU,

      duplicate:
        passwordCount[password] > 1,

      risk,

      analysis,

    };

  });

  return results;

}