function PasswordOptions({
  options,
  setOptions,
}) {
  const handleChange = (field) => {
    setOptions({
      ...options,
      [field]: !options[field],
    });
  };

  return (
    <div className="password-options">

      <h3>Password Options</h3>

      <div className="options-grid">

        <label className="option-item">
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={() => handleChange("uppercase")}
          />
          <span>Uppercase Letters (A-Z)</span>
        </label>

        <label className="option-item">
          <input
            type="checkbox"
            checked={options.lowercase}
            onChange={() => handleChange("lowercase")}
          />
          <span>Lowercase Letters (a-z)</span>
        </label>

        <label className="option-item">
          <input
            type="checkbox"
            checked={options.numbers}
            onChange={() => handleChange("numbers")}
          />
          <span>Numbers (0-9)</span>
        </label>

        <label className="option-item">
          <input
            type="checkbox"
            checked={options.symbols}
            onChange={() => handleChange("symbols")}
          />
          <span>Symbols (!@#$...)</span>
        </label>

        <label className="option-item">
          <input
            type="checkbox"
            checked={options.excludeSimilar}
            onChange={() => handleChange("excludeSimilar")}
          />
          <span>Exclude Similar Characters</span>
        </label>

        <label className="option-item">
          <input
            type="checkbox"
            checked={options.excludeAmbiguous}
            onChange={() => handleChange("excludeAmbiguous")}
          />
          <span>Exclude Ambiguous Symbols</span>
        </label>

      </div>

    </div>
  );
}

export default PasswordOptions;