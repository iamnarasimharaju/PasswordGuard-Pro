function ScoreBar({ score }) {

  const getColor = () => {

    if (score >= 80) return "#22c55e";

    if (score >= 60) return "#facc15";

    if (score >= 40) return "#f97316";

    return "#ef4444";

  };

  return (

    <div className="score-bar">

      <div
        className="score-fill"
        style={{
          width: `${score}%`,
          background: getColor(),
        }}
      />

      <span className="score-text">

        {score}/100

      </span>

    </div>

  );

}

export default ScoreBar;