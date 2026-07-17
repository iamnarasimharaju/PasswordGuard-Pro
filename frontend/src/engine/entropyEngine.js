export function calculateEntropy(password) {
  let characterSet = 0;

  if (/[a-z]/.test(password)) characterSet += 26;
  if (/[A-Z]/.test(password)) characterSet += 26;
  if (/[0-9]/.test(password)) characterSet += 10;
  if (/[^A-Za-z0-9]/.test(password)) characterSet += 32;

  if (characterSet === 0) {
    return {
      entropy: 0,
      level: "Very Weak",
    };
  }

  const entropy = password.length * Math.log2(characterSet);

  let level = "";

  if (entropy < 28) level = "Very Weak";
  else if (entropy < 36) level = "Weak";
  else if (entropy < 60) level = "Fair";
  else if (entropy < 80) level = "Good";
  else if (entropy < 100) level = "Strong";
  else level = "Very Strong";

  return {
    entropy: Number(entropy.toFixed(2)),
    level,
  };
}