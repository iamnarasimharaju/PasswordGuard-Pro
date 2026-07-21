import MetricCard from "../common/MetricCard";
import { useDashboard } from "../../hooks/useDashboard";

function ExecutiveSummary() {

  const { stats } = useDashboard();

  const averageScore =
    stats.passwordsAudited > 0
      ? Math.round(stats.totalScore / stats.passwordsAudited)
      : 0;

  const averageEntropy =
    stats.passwordsAudited > 0
      ? Math.round(stats.totalEntropy / stats.passwordsAudited)
      : 0;

  return (

    <div className="metrics-grid">

      <MetricCard
        title="Security Score"
        value={`${averageScore}/100`}
        subtitle="Overall Security"
      />

      <MetricCard
        title="Entropy"
        value={`${averageEntropy} bits`}
        subtitle="Average Entropy"
      />

      <MetricCard
        title="Total Passwords"
        value={stats.passwordsAudited}
        subtitle="Audited"
      />

      <MetricCard
        title="Duplicates"
        value={stats.duplicates}
        subtitle="Password Reuse"
      />

    </div>

  );

}

export default ExecutiveSummary;