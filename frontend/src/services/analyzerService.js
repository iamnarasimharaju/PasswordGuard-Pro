import { analyzePassword } from "../engine";
import zxcvbn from "zxcvbn";

export function analyze(password) {
  const custom = analyzePassword(password);

  const zxcvbnResult = zxcvbn(password);

  return {
    custom,
    zxcvbn: {
      score: zxcvbnResult.score,
      guesses: zxcvbnResult.guesses,
      feedback: zxcvbnResult.feedback,
      crackTimes: zxcvbnResult.crack_times_display,
    },
  };
}