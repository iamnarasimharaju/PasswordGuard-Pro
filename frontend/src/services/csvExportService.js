export function exportAuditToCSV(results) {

  if (!results || results.length === 0) {
    alert("No audit results available to export.");
    return;
  }

  const headers = [
    "Password",
    "Score",
    "Entropy (bits)",
    "GPU Crack Time",
    "Risk",
    "Duplicate",
  ];

  const rows = results.map((item) => [
    item.password,
    item.score,
    item.entropy,
    item.crackTime,
    item.risk,
    item.duplicate ? "Yes" : "No",
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "PasswordAuditReport.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);

}