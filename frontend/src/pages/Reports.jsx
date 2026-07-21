import Card from "../components/common/Card";
import ExecutiveSummary from "../components/reports/ExecutiveSummary";
import ExportButtons from "../components/reports/ExportButtons";

function Reports() {

  return (

    <div className="reports-page">

      <div className="analyzer-header">

        <div className="header-badge">
          PasswordGuard Pro
        </div>

        <h1>Enterprise Security Report</h1>

        <p>
          View an executive summary of password security,
          audit statistics and recommendations.
        </p>

      </div>

      <ExecutiveSummary />

      <Card>

  <h2>Executive Summary</h2>

  <p>
    This report summarizes password strength,
    entropy, duplicate detection, and enterprise
    security posture across all audited passwords.
  </p>

  <ExportButtons />

</Card>


    </div>

  );

}

export default Reports;