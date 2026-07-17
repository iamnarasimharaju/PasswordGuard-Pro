import {
  ShieldCheck,
  Brain,
  Cpu,
  BarChart3
} from "lucide-react";

const icons = {
  "Security Score": <ShieldCheck size={22} />,
  "Entropy": <Brain size={22} />,
  "GPU Crack Time": <Cpu size={22} />,
  "zxcvbn Score": <BarChart3 size={22} />
};

function MetricCard({ title, value, subtitle }) {
  return (
    <div className="metric-card">

      <div className="metric-icon">
        {icons[title]}
      </div>

      <p className="metric-title">
        {title}
      </p>

      <h2 className="metric-value">
        {value}
      </h2>

      <p className="metric-subtitle">
        {subtitle}
      </p>

    </div>
  );
}

export default MetricCard;