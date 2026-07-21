import { useState } from "react";

import AuditInput from "../components/audit/AuditInput";
import AuditSummary from "../components/audit/AuditSummary";
import AuditTable from "../components/audit/AuditTable";

import { auditPasswords } from "../engine/auditEngine";
import { useDashboard } from "../hooks/useDashboard";

function PolicyChecker() {

  const [results, setResults] = useState([]);

  const { updateAuditStatistics } = useDashboard();

  function handleAudit(input) {

    const auditResults = auditPasswords(input);

    setResults(auditResults);

    updateAuditStatistics(auditResults);

  }

  return (

    <div>

      <AuditInput
        onAudit={handleAudit}
      />

      <AuditSummary
        results={results}
      />

      <AuditTable
        results={results}
      />

    </div>

  );

}

export default PolicyChecker;