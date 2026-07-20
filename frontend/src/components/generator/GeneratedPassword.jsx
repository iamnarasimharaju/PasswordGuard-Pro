import { useState } from "react";
import {
  Copy,
  RefreshCw,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

function GeneratedPassword({
  password,
  onGenerate,
  result,
}) {

  const [showPassword, setShowPassword] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyPassword = async () => {

    if (!password) return;

    await navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  };

  return (

    <div className="generated-password-card">

      <div className="generated-header">

        <div>

          <h2>Generated Password</h2>

          <p>
            Secure password generated using the selected policy.
          </p>

        </div>

        <button
          className="icon-btn"
          onClick={onGenerate}
        >
          <RefreshCw size={18} />
        </button>

      </div>

      <div className="password-display">

        <input
          type={showPassword ? "text" : "password"}
          value={password}
          readOnly
        />

        <button
          className="icon-btn"
          onClick={() =>
            setShowPassword(!showPassword)
          }
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

        <button
          className="copy-btn"
          onClick={copyPassword}
        >
          <Copy size={18} />

          {copied ? "Copied!" : "Copy"}

        </button>

      </div>

      {result && (

        <div className="generator-summary">

          <div className="summary-card">

            <ShieldCheck />

            <h3>Security Score</h3>

            <h2>
              {result.custom.score.score}/100
            </h2>

            <span>
              {result.custom.score.strength}
            </span>

          </div>

          <div className="summary-card">

            <h3>Entropy</h3>

            <h2>
              {Math.round(
                result.custom.entropy.entropy
              )} bits
            </h2>

          </div>

          <div className="summary-card">

            <h3>GPU Crack Time</h3>

            <h2>
              {result.custom.crackTime.offlineGPU}
            </h2>

          </div>

        </div>

      )}

    </div>

  );
}

export default GeneratedPassword;