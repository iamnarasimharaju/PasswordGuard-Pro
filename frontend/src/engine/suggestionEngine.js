export function generateSuggestions(password, score, patterns) {
  const suggestions = [];

  if (password.length < 12) {
    suggestions.push("Increase password length to at least 12 characters.");
  }

  if (!/[A-Z]/.test(password)) {
    suggestions.push("Add at least one uppercase letter.");
  }

  if (!/[a-z]/.test(password)) {
    suggestions.push("Add at least one lowercase letter.");
  }

  if (!/[0-9]/.test(password)) {
    suggestions.push("Add at least one number.");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    suggestions.push("Add at least one special character.");
  }

  if (patterns.hasCommonPassword) {
    suggestions.push("Avoid common or dictionary passwords.");
  }

  if (patterns.hasKeyboardPattern) {
    suggestions.push("Avoid keyboard patterns such as qwerty or 123456.");
  }

  if (patterns.hasRepeatedCharacters) {
    suggestions.push("Avoid repeated characters.");
  }

  if (score >= 90 && suggestions.length === 0) {
    suggestions.push("Excellent password. No improvements recommended.");
  }

  return suggestions;
}