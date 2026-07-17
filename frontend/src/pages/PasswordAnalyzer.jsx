import { useMemo, useState } from "react";

import PasswordInput from "../components/analyzer/PasswordInput";
import StrengthMeter from "../components/analyzer/StrengthMeter";
import PasswordBreakdown from "../components/analyzer/PasswordBreakdown";
import SuggestionList from "../components/analyzer/SuggestionList";
import AttackSimulation from "../components/analyzer/AttackSimulation";

import MetricCard from "../components/common/MetricCard";
import SectionGrid from "../components/common/SectionGrid";

import { analyze } from "../services/analyzerService";

function PasswordAnalyzer() {
  const [password, setPassword] = useState("");

  const result = useMemo(() => analyze(password), [password]);

  return (
    <div className="password-analyzer-page">

      <h2>Enterprise Password Security Analyzer</h2>

      <PasswordInput
        password={password}
        setPassword={setPassword}
      />

      <StrengthMeter
        score={result.custom.score.score}
        strength={result.custom.score.strength}
      />

      <div className="metrics-grid">

        <MetricCard
          title="Security Score"
          value={`${result.custom.score.score}/100`}
          subtitle={result.custom.score.strength}
        />

        <MetricCard
          title="Entropy"
          value={`${Math.round(result.custom.entropy.entropy)} bits`}
          subtitle={result.custom.entropy.level}
        />

        <MetricCard
          title="GPU Crack Time"
          value={result.custom.crackTime.offlineGPU}
          subtitle="Offline GPU Attack"
        />

        <MetricCard
          title="zxcvbn Score"
          value={`${result.zxcvbn.score}/4`}
          subtitle="Industry Standard"
        />

      </div>

      <SectionGrid>

        <PasswordBreakdown
          result={result.custom}
          password={password}
        />

        <AttackSimulation
          simulation={result.custom.attackSimulation}
          password={password}
        />

        <SuggestionList
          suggestions={result.custom.suggestions}
          password={password}
        />

      </SectionGrid>

    </div>
  );
}

export default PasswordAnalyzer;