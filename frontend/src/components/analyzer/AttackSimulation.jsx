import {
  BookOpen,
  Cpu,
  Monitor,
  ShieldCheck,
  Target,
} from "lucide-react";

import SectionCard from "../common/SectionCard";

function AttackSimulation({ simulation, password }) {
  if (!password) return null;

  const attacks = [
    {
      icon: <BookOpen size={18} />,
      label: "Dictionary Attack",
      value: simulation.dictionaryAttack,
    },
    {
      icon: <Cpu size={18} />,
      label: "GPU Brute Force",
      value: simulation.gpuAttack,
    },
    {
      icon: <Monitor size={18} />,
      label: "CPU Brute Force",
      value: simulation.cpuAttack,
    },
    {
      icon: <ShieldCheck size={18} />,
      label: "Rainbow Table",
      value: simulation.rainbowTable,
    },
    {
      icon: <Target size={18} />,
      label: "Hybrid Attack",
      value: simulation.hybridAttack,
    },
  ];

  return (
    <SectionCard title="Attack Simulation">
      {attacks.map((attack) => (
        <div className="attack-item" key={attack.label}>
          <div className="attack-left">
            {attack.icon}
            <span>{attack.label}</span>
          </div>

          <strong>{attack.value}</strong>
        </div>
      ))}
    </SectionCard>
  );
}

export default AttackSimulation;