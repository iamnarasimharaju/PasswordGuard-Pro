import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

function PasswordBreakdown({ result, password }) {
  if (!password) return null;

  const checks = [
    {
      label: "Minimum 12 Characters",
      passed: result.score.checks.length,
    },
    {
      label: "Uppercase Letter",
      passed: result.score.checks.uppercase,
    },
    {
      label: "Lowercase Letter",
      passed: result.score.checks.lowercase,
    },
    {
      label: "Number",
      passed: result.score.checks.numbers,
    },
    {
      label: "Special Character",
      passed: result.score.checks.symbols,
    },
    {
      label: "No Common Password",
      passed: !result.patterns.hasCommonPassword,
    },
    {
      label: "No Keyboard Pattern",
      passed: !result.patterns.hasKeyboardPattern,
    },
    {
      label: "No Repeated Characters",
      passed: !result.patterns.hasRepeatedCharacters,
    },
  ];

  return (
    <div className="breakdown-card">

      <h3>Password Breakdown</h3>

      <div className="breakdown-list">

        {checks.map((item) => (
          <div
            key={item.label}
            className="breakdown-item"
          >
            {item.passed ? (
              <CheckCircle2
                size={20}
                color="#22c55e"
              />
            ) : (
              <XCircle
                size={20}
                color="#ef4444"
              />
            )}

            <span>{item.label}</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PasswordBreakdown;