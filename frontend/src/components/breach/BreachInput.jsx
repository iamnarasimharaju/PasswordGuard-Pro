import { useState } from "react";

function BreachInput({ onCheck }) {

  const [password, setPassword] = useState("");

  return (

    <div className="audit-input-card">

      <h2>Breach Checker</h2>

      <p>

        Check whether a password exists in the local breach database.

      </p>

      <input

        type="text"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

        className="audit-search"

        placeholder="Enter password"

      />

      <br /><br />

      <button

        className="btn btn-primary"

        onClick={()=>onCheck(password)}

      >

        Check Password

      </button>

    </div>

  );

}

export default BreachInput;