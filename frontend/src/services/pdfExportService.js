import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportAuditToPDF(stats) {

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text("PasswordGuard Pro", 14, 20);

  doc.setFontSize(16);

  doc.text("Enterprise Security Report", 14, 30);

  doc.setFontSize(11);

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    14,
    40
  );

  doc.setFontSize(15);

  doc.text("Executive Summary", 14, 55);

  doc.setFontSize(11);

  doc.text(
    `Passwords Audited : ${stats.passwordsAudited}`,
    14,
    68
  );

  doc.text(
    `Average Score : ${
      stats.passwordsAudited
        ? Math.round(stats.totalScore / stats.passwordsAudited)
        : 0
    } / 100`,
    14,
    76
  );

  doc.text(
    `Average Entropy : ${
      stats.passwordsAudited
        ? Math.round(stats.totalEntropy / stats.passwordsAudited)
        : 0
    } bits`,
    14,
    84
  );

  doc.text(
    `Duplicates : ${stats.duplicates}`,
    14,
    92
  );

  autoTable(doc, {

    startY: 105,

    head: [[
      "Password",
      "Score",
      "Entropy",
      "Risk",
      "Duplicate"
    ]],

    body: stats.auditResults.map(item => [

      item.password,

      item.score,

      item.entropy,

      item.risk,

      item.duplicate ? "Yes" : "No",

    ])

  });

  const finalY =
    doc.lastAutoTable?.finalY || 120;

  doc.setFontSize(14);

  doc.text(
    "Recommendations",
    14,
    finalY + 15
  );

  doc.setFontSize(11);

  doc.text(
    "• Improve weak passwords",
    18,
    finalY + 28
  );

  doc.text(
    "• Remove duplicate passwords",
    18,
    finalY + 36
  );

  doc.text(
    "• Use longer passwords",
    18,
    finalY + 44
  );

  doc.text(
    "• Enable Multi-Factor Authentication (MFA)",
    18,
    finalY + 52
  );

  doc.save("PasswordGuardReport.pdf");

}