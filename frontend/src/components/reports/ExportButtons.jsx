import Button from "../common/Button";
import { useDashboard } from "../../hooks/useDashboard";

import { exportAuditToCSV } from "../../services/csvExportService";
import { exportAuditToPDF } from "../../services/pdfExportService";

function ExportButtons() {

  const { stats } = useDashboard();

  function handleCSVExport() {
    exportAuditToCSV(stats.auditResults);
  }

  function handlePDFExport() {
    exportAuditToPDF(stats);
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