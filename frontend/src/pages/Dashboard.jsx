import Card from "../components/common/Card";

function Dashboard() {
  return (
    <>
      <div className="stats-grid">

        <Card>
          <h3>Security Score</h3>
          <h1>94%</h1>
          <p>Excellent</p>
        </Card>

        <Card>
          <h3>Entropy</h3>
          <h1>92 Bits</h1>
          <p>Very Strong</p>
        </Card>

        <Card>
          <h3>Crack Time</h3>
          <h1>2M Years</h1>
          <p>Offline Attack</p>
        </Card>

        <Card>
          <h3>Risk Level</h3>
          <h1>Low</h1>
          <p>No Breach Found</p>
        </Card>

      </div>
    </>
  );
}

export default Dashboard;