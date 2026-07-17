import { PASSWORD_POLICY, SCORE, STRENGTH_LEVEL } from "./constants";

export function calculatePasswordScore(password) {
  let score = 0;

  const checks = {
    length: false,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  };

  // Length Check
  if (password.length >= PASSWORD_POLICY.MIN_LENGTH) {
    score += SCORE.LENGTH;
    checks.length = true;
  }

  // Uppercase Check
  if (/[A-Z]/.test(password)) {
    score += SCORE.UPPERCASE;
    checks.uppercase = true;
  }

  // Lowercase Check
  if (/[a-z]/.test(password)) {
    score += SCORE.LOWERCASE;
    checks.lowercase = true;
  }

  // Number Check
  if (/[0-9]/.test(password)) {
    score += SCORE.NUMBER;
    checks.numbers = true;
  }

  // Symbol Check
  if (/[^A-Za-z0-9]/.test(password)) {
    score += SCORE.SYMBOL;
    checks.symbols = true;
  }

  // Bonus for long passwords
  if (password.length >= 16) {
    score += SCORE.BONUS;
  }

  // Maximum score is 100
  score = Math.min(score, 100);

  let strength = "";

  if (score <= 20) strength = STRENGTH_LEVEL[0];
  else if (score <= 40) strength = STRENGTH_LEVEL[1];
  else if (score <= 60) strength = STRENGTH_LEVEL[2];
  else if (score <= 80) strength = STRENGTH_LEVEL[3];
  else if (score <= 95) strength = STRENGTH_LEVEL[4];
  else strength = STRENGTH_LEVEL[5];

  return {
    score,
    strength,
    checks,
  };
}