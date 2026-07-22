import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useDashboard } from "../../hooks/useDashboard";

function RiskDistributionChart() {

  const { stats } = useDashboard();

  const data = [
    {
      name: "Strong",
      value: stats.strongPasswords,
      color: "#22c55e",
    },
    {
      name: "Medium",
      value: stats.mediumPasswords,
      color: "#facc15",
    },
    {
      name: "High",
      value: stats.highPasswords,
      color: "#f97316",
    },
    {
      name: "Critical",
      value: stats.criticalPasswords,
      color: "#ef4444",
    },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="chart-card">

      <h2>Risk Distribution</h2>

      {total === 0 ? (

        <div
          style={{
            height: 320,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          No audit data available
        </div>

      ) : (

        <ResponsiveContainer width="100%" height={360}>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={120}
              paddingAngle={3}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={entry.color}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
            />

          </PieChart>

        </ResponsiveContainer>

      )}

    </div>
  );

}

export default RiskDistributionChart;