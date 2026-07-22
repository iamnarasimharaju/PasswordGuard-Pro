import { useState } from "react";

function Settings() {

  const [settings, setSettings] = useState({

    darkMode: true,
    minimumLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecial: true,
    autoSaveReports: true,

  });

  function handleChange(e) {

    const { name, checked, value, type } = e.target;

    setSettings(prev => ({

      ...prev,

      [name]: type === "checkbox"
        ? checked
        : value,

    }));

  }

  return (

    <div className="section-card">

      <h2>Settings</h2>

      <br />

      <h3>Application Preferences</h3>

      <br />

      <label>

        <input
          type="checkbox"
          name="darkMode"
          checked={settings.darkMode}
          onChange={handleChange}
        />

        {" "}Enable Dark Mode

      </label>

      <br /><br />

      <label>

        Minimum Password Length

      </label>

      <br />

      <input

        type="number"

        name="minimumLength"

        value={settings.minimumLength}

        onChange={handleChange}

        className="audit-search"

      />

      <br /><br />

      <label>

        <input
          type="checkbox"
          name="requireUppercase"
          checked={settings.requireUppercase}
          onChange={handleChange}
        />

        {" "}Require Uppercase

      </label>

      <br /><br />

      <label>

        <input
          type="checkbox"
          name="requireLowercase"
          checked={settings.requireLowercase}
          onChange={handleChange}
        />

        {" "}Require Lowercase

      </label>

      <br /><br />

      <label>

        <input
          type="checkbox"
          name="requireNumbers"
          checked={settings.requireNumbers}
          onChange={handleChange}
        />

        {" "}Require Numbers

      </label>

      <br /><br />

      <label>

        <input
          type="checkbox"
          name="requireSpecial"
          checked={settings.requireSpecial}
          onChange={handleChange}
        />

        {" "}Require Special Characters

      </label>

      <br /><br />

      <label>

        <input
          type="checkbox"
          name="autoSaveReports"
          checked={settings.autoSaveReports}
          onChange={handleChange}
        />

        {" "}Auto Save Reports

      </label>

      <br /><br /><br />

      <hr />

      <br />

      <h3>PasswordGuard Pro v1.0</h3>

      <p>

        Enterprise Password Security Suite

      </p>

    </div>

  );

}

export default Settings;