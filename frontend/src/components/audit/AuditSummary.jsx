import MetricCard from "../common/MetricCard";

function AuditSummary({ results }) {

  if (!results.length) return null;

  const total = results.length;

  const strong = results.filter(
    r => r.risk === "Strong"
  ).length;

  const medium = results.filter(
    r => r.risk === "Medium"
  ).length;

  const high = results.filter(
    r => r.risk === "High"
  ).length;

  const critical = results.filter(
    r => r.risk === "Critical"
  ).length;

  const duplicates = results.filter(
    r => r.duplicate
  ).length;

  const averageScore = Math.round(

    results.reduce(
      (sum, item) => sum + item.score,
      0
    ) / total

  );

  const averageEntropy = Math.round(

    results.reduce(
      (sum, item) => sum + item.entropy,
      0
    ) / total

  );

  return (

    <div className="metrics-grid">

      <MetricCard
        title="Total Passwords"
        value={total}
        subtitle="Audited"
      />

      <MetricCard
        title="Strong"
        value={strong}
        subtitle="Secure"
      />

      <MetricCard
        title="Medium"
        value={medium}
        subtitle="Moderate"
      />

      <MetricCard
        title="High"
        value={high}
        subtitle="Needs Improvement"
      />

      <MetricCard
        title="Critical"
        value={critical}
        subtitle="Immediate Action"
      />

      <MetricCard
        title="Duplicates"
        value={duplicates}
        subtitle="Password Reuse"
      />

      <MetricCard
        title="Average Score"
        value={`${averageScore}/100`}
        subtitle="Overall Security"
      />

      <MetricCard
        title="Average Entropy"
        value={`${averageEntropy} bits`}
        subtitle="Password Complexity"
      />

    </div>

  );

}

export default AuditSummary;