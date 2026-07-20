import {
  ShieldCheck,
  Swords,
  ClipboardList,
  Lightbulb,
} from "lucide-react";

const icons = {
  "Password Breakdown": <ClipboardList size={20} />,
  "Attack Simulation": <Swords size={20} />,
  "Compliance": <ShieldCheck size={20} />,
  "Security Recommendations": <Lightbulb size={20} />,
};

function SectionCard({ title, children }) {
  return (
    <div className="section-card">

      <div className="section-header">

        <div className="section-icon">
          {icons[title]}
        </div>

        <h3 className="section-title">
          {title}
        </h3>

      </div>

      <div className="section-content">
        {children}
      </div>

    </div>
  );
}

export default SectionCard;