import Card from "../components/common/Card";
import RiskSummary from "../components/dashboard/RiskSummary";

import { useDashboard } from "../hooks/useDashboard";
import { getDashboardStatistics } from "../services/dashboardService";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {

  const { stats } = useDashboard();

  const dashboard =
    getDashboardStatistics(stats.auditResults);

  return (

    <>

      <div className="stats-grid">

        <Card>

          <h3>Passwords Audited</h3>

          <h1>{dashboard.totalPasswords}</h1>

          <p>Total Audited</p>

        </Card>

        <Card>

          <h3>Average Score</h3>

          <h1>{dashboard.averageScore}/100</h1>

          <p>Security Score</p>

        </Card>

        <Card>

          <h3>Average Entropy</h3>

          <h1>{dashboard.averageEntropy} bits</h1>

          <p>Password Strength</p>

        </Card>

        <Card>

          <h3>Duplicates</h3>

          <h1>{dashboard.duplicates}</h1>

          <p>Password Reuse</p>

        </Card>

      </div>

      <div className="section-grid">

    <RiskSummary />

    <RecentActivity />

</div>

    </>

  );

}

export default Dashboard;