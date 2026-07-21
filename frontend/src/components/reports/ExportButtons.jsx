import Button from "../common/Button";
import { useDashboard } from "../../hooks/useDashboard";
import { exportAuditToCSV } from "../../services/csvExportService";

function ExportButtons() {

  const { stats } = useDashboard();

  function handleCSVExport() {
    exportAuditToCSV(stats.auditResults);
  }

  function handlePDFExport() {
    alert("PDF Export will be available in the next sprint.");
  }

  return (

    <div className="report-actions">

      <Button onClick={handleCSVExport}>
        Export CSV
      </Button>

      <Button onClick={handlePDFExport}>
        Export PDF
      </Button>

    </div>

  );

}

export default ExportButtons;