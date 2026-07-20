import { useMemo, useState, useEffect } from "react";
import { KeyRound } from "lucide-react";

import GeneratorForm from "../components/generator/GeneratorForm";
import PasswordOptions from "../components/generator/PasswordOptions";
import GeneratedPassword from "../components/generator/GeneratedPassword";

import { generatePassword } from "../engine/generatorEngine";
import { analyze } from "../services/analyzerService";

function PasswordGenerator() {

  const [options, setOptions] = useState({
    length: 20,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false,
  });

  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword(generatePassword(options));
  }, []);

  const handleGenerate = () => {
    setPassword(generatePassword(options));
  };

  const result = useMemo(() => {
    if (!password) return null;
    return analyze(password);
  }, [password]);

  return (
    <div className="password-generator-page">

      <div className="analyzer-header">

        <div className="header-badge">
          <KeyRound size={18}/>
          PasswordGuard Pro
        </div>

        <h1>Enterprise Password Generator</h1>

        <p>
          Generate cryptographically secure passwords and instantly
          analyze their strength using the PasswordGuard engine.
        </p>

      </div>

      <GeneratorForm
        options={options}
        setOptions={setOptions}
        onGenerate={handleGenerate}
      />

      <PasswordOptions
        options={options}
        setOptions={setOptions}
      />

      <GeneratedPassword
        password={password}
        onGenerate={handleGenerate}
        result={result}
      />

    </div>
  );
}

export default PasswordGenerator;