import { Wand2 } from "lucide-react";

function GeneratorForm({
  options,
  setOptions,
  onGenerate,
}) {
  return (
    <div className="generator-form">

      <div className="generator-header">

        <div>

          <label className="generator-label">
            Password Length
          </label>

          <div className="length-value">
            {options.length} Characters
          </div>

        </div>

      </div>

      <input
        type="range"
        min="8"
        max="64"
        value={options.length}
        className="length-slider"
        onChange={(e) =>
          setOptions({
            ...options,
            length: Number(e.target.value),
          })
        }
      />

      <button
        className="generate-btn"
        onClick={onGenerate}
      >
        <Wand2 size={18} />

        Generate Password

      </button>

    </div>
  );
}

export default GeneratorForm;