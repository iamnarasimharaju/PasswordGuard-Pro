import { calculatePasswordScore } from "./scoreEngine";
import { analyzePatterns } from "./patternEngine";
import { calculateEntropy } from "./entropyEngine";
import { estimateCrackTime } from "./crackTimeEngine";
import { generateSuggestions } from "./suggestionEngine";
import { simulateAttacks } from "./attackSimulationEngine";

export function analyzePassword(password) {
  const score = calculatePasswordScore(password);

  const patterns = analyzePatterns(password);

  const entropy = calculateEntropy(password);

  const crackTime = estimateCrackTime(entropy.entropy);

  const suggestions = generateSuggestions(
    password,
    score.score,
    patterns
  );

  const attackSimulation = simulateAttacks(
    password,
    crackTime
  );

  return {
    score,
    patterns,
    entropy,
    crackTime,
    suggestions,
    attackSimulation,
  };
}