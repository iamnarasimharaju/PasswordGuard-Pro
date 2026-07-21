import { useState } from "react";

import AuditInput from "../components/audit/AuditInput";
import AuditSummary from "../components/audit/AuditSummary";
import AuditTable from "../components/audit/AuditTable";

import { auditPasswords } from "../engine/auditEngine";

function PolicyChecker() {

  const [results, setResults] = useState([]);

  function handleAudit(input) {

    const auditResults = auditPasswords(input);

    setResults(auditResults);

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