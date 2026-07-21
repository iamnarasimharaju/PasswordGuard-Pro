import { useState } from "react";
import Button from "../common/Button";

function AuditInput({ onAudit }) {

  const [text, setText] = useState("");

  const handleAudit = () => {
    onAudit(text);
  };

  return (

    <div className="audit-input-card">

      <h2>Password Audit</h2>

      <p>
        Paste one password per line to perform a bulk security audit.
      </p>

      <textarea
        className="audit-textarea"
        placeholder={`Admin123
Welcome@123
Summer2024
Password123`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        onClick={handleAudit}
      >
        Audit Passwords
      </Button>

    </div>

  );

}

export default AuditInput;