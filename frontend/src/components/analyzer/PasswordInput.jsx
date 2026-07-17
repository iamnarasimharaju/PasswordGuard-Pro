import { Eye, EyeOff, Copy, X } from "lucide-react";
import { useState } from "react";

function PasswordInput({ password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  const copyPassword = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
  };

  return (
    <div className="password-section">

      <label className="password-label">
        Password
      </label>

      <div className="password-wrapper">

        <input
          className="password-input"
          type={showPassword ? "text" : "password"}
          placeholder="Enter a password to analyze..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="password-icons">

          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>

          <button
            onClick={copyPassword}
            type="button"
          >
            <Copy size={20}/>
          </button>

          <button
            onClick={() => setPassword("")}
            type="button"
          >
            <X size={20}/>
          </button>

        </div>

      </div>

    </div>
  );
}

export default PasswordInput;