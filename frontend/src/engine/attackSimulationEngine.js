export function simulateAttacks(password, crackTime) {
  const dictionaryAttack =
    password.length >= 12
      ? "Failed"
      : "High Success Probability";

  const rainbowTable =
    /[^A-Za-z0-9]/.test(password)
      ? "Protected"
      : "Vulnerable";

  const hybridAttack =
    password.length >= 16
      ? "Extremely Difficult"
      : password.length >= 12
      ? "Difficult"
      : "Possible";

  return {
    dictionaryAttack,
    gpuAttack: crackTime.offlineGPU,
    cpuAttack: crackTime.offlineCPU,
    rainbowTable,
    hybridAttack,
  };
}