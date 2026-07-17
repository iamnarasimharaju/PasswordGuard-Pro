function StrengthMeter({ score, strength }) {
  const getColor = () => {
    if (score <= 20) return "#ef4444";
    if (score <= 40) return "#f97316";
    if (score <= 60) return "#eab308";
    if (score <= 80) return "#22c55e";
    return "#3b82f6";
  };

  return (
    <div className="strength-container">

      <div className="strength-header">
        <span>Password Strength</span>

        <span className="strength-score">
          {score}/100
        </span>
      </div>

      <div className="strength-track">

        <div
          className="strength-progress"
          style={{
            width: `${score}%`,
            background: getColor(),
          }}
        />

      </div>

      <div className="strength-footer">
        {strength}
      </div>

    </div>
  );
}

export default StrengthMeter;