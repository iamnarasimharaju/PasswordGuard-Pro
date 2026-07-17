function formatYears(years) {
  if (years < 1) {
    return `${(years * 365).toFixed(0)} days`;
  }

  const units = [
    { value: 1e24, name: "Septillion Years" },
    { value: 1e21, name: "Sextillion Years" },
    { value: 1e18, name: "Quintillion Years" },
    { value: 1e15, name: "Quadrillion Years" },
    { value: 1e12, name: "Trillion Years" },
    { value: 1e9, name: "Billion Years" },
    { value: 1e6, name: "Million Years" },
    { value: 1e3, name: "Thousand Years" },
  ];

  for (const unit of units) {
    if (years >= unit.value) {
      return `${(years / unit.value).toFixed(1)} ${unit.name}`;
    }
  }

  return `${years.toFixed(2)} Years`;
}

export function estimateCrackTime(entropy) {
  const guesses = Math.pow(2, entropy);

  const guessesPerSecondGPU = 1e12;

  const guessesPerSecondCPU = 1e8;

  const offlineGPUYears =
    guesses / guessesPerSecondGPU / 60 / 60 / 24 / 365;

  const offlineCPUYears =
    guesses / guessesPerSecondCPU / 60 / 60 / 24 / 365;

  return {
    offlineGPU: formatYears(offlineGPUYears),
    offlineCPU: formatYears(offlineCPUYears),
  };
}