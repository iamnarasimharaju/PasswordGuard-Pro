import {
  COMMON_PASSWORDS,
  KEYBOARD_PATTERNS,
} from "./constants";

export function analyzePatterns(password) {
  const lowerPassword = password.toLowerCase();

  // Common Password Check
  const hasCommonPassword = COMMON_PASSWORDS.some((item) =>
    lowerPassword.includes(item)
  );

  // Keyboard Pattern Check
  const hasKeyboardPattern = KEYBOARD_PATTERNS.some((item) =>
    lowerPassword.includes(item)
  );

  // Repeated Characters Check (3 or more)
  const hasRepeatedCharacters = /(.)\1{2,}/.test(password);

  return {
    hasCommonPassword,
    hasKeyboardPattern,
    hasRepeatedCharacters,
  };
}