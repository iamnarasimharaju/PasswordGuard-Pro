import { useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";

import PasswordInput from "../components/analyzer/PasswordInput";
import StrengthMeter from "../components/analyzer/StrengthMeter";
import PasswordBreakdown from "../components/analyzer/PasswordBreakdown";
import SuggestionList from "../components/analyzer/SuggestionList";
import AttackSimulation from "../components/analyzer/AttackSimulation";
import ComplianceCard from "../components/analyzer/ComplianceCard";

import MetricCard from "../components/common/MetricCard";
import SectionGrid from "../components/common/SectionGrid";

import { analyze } from "../services/analyzerService";

function PasswordAnalyzer() {
  const [password, setPassword] = useState("");

  const result = useMemo(() => analyze(password), [password]);

  return (
    <div className="password-analyzer-page">

      {/* ---------- HEADER ---------- */}

      <div className="analyzer-header">

        <div className="header-badge">
          <ShieldCheck size={18} />
          PasswordGuard Pro
        </div>

        <h1>Enterprise Password Security Analyzer</h1>

        <p>
          Analyze password strength using entropy calculation,
          attack simulation, compliance validation, crack-time
          estimation and industry-standard security scoring.
        </p>

      </div>

      {/* ---------- INPUT ---------- */}

      <PasswordInput
        password={password}
        setPassword={setPassword}
      />

      {/* ---------- STRENGTH ---------- */}

      <StrengthMeter
        score={result.custom.score.score}
        strength={result.custom.score.strength}
      />

      {/* ---------- METRICS ---------- */}

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

      {/* ---------- SECTION GRID ---------- */}

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

        <ComplianceCard
          compliance={result.custom.compliance}
          password={password}
        />

      </SectionGrid>

    </div>
  );
}

export default PasswordAnalyzer;