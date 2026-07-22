function BreachResult({ result }) {

  if (!result) return null;

  return (

    <div className="section-card">

      <h2>Result</h2>

      <br />

      <h3>

        {result.found ? "❌ Password Found" : "✅ Password Safe"}

      </h3>

      <br />

      <p>

        <strong>Risk :</strong> {result.risk}

      </p>

      <br />

      <p>

        {result.message}

      </p>

    </div>

  );

}

export default BreachResult;