import { useDashboard } from "../../hooks/useDashboard";
import { getDashboardStatistics } from "../../services/dashboardService";

function RiskSummary() {

  const { stats } = useDashboard();

  const dashboard = getDashboardStatistics(stats.auditResults);

  const risks = [
    {
      label: "Strong",
      value: dashboard.strongPasswords,
      color: "#22c55e",
    },
    {
      label: "Medium",
      value: dashboard.mediumPasswords,
      color: "#eab308",
    },
    {
      label: "High",
      value: dashboard.highPasswords,
      color: "#f97316",
    },
    {
      label: "Critical",
      value: dashboard.criticalPasswords,
      color: "#ef4444",
    },
  ];

  return (

    <div className="chart-card">

      <h2>Risk Distribution</h2>

      {

        risks.map((risk)=>(

          <div
            key={risk.label}
            className="risk-row"
          >

            <div className="risk-header">

              <span>{risk.label}</span>

              <strong>{risk.value}</strong>

            </div>

            <div className="risk-progress">

              <div
                className="risk-progress-fill"
                style={{
                  width: `${Math.max(risk.value*20,5)}%`,
                  background: risk.color
                }}
              />

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default RiskSummary;