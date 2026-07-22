export function getDashboardStatistics(results = []) {

  const totalPasswords = results.length;

  const averageScore =
    totalPasswords > 0
      ? Math.round(
          results.reduce((sum, item) => sum + item.score, 0) /
          totalPasswords
        )
      : 0;

  const averageEntropy =
    totalPasswords > 0
      ? Math.round(
          results.reduce((sum, item) => sum + item.entropy, 0) /
          totalPasswords
        )
      : 0;

  const strongPasswords =
    results.filter(r => r.risk === "Strong").length;

  const mediumPasswords =
    results.filter(r => r.risk === "Medium").length;

  const highPasswords =
    results.filter(r => r.risk === "High").length;

  const criticalPasswords =
    results.filter(r => r.risk === "Critical").length;

  const duplicates =
    results.filter(r => r.duplicate).length;

  return {

    totalPasswords,

    averageScore,

    averageEntropy,

    strongPasswords,

    mediumPasswords,

    highPasswords,

    criticalPasswords,

    duplicates,

  };

}