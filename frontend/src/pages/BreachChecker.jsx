import { useState } from "react";

import BreachInput from "../components/breach/BreachInput";
import BreachResult from "../components/breach/BreachResult";

import { checkPassword } from "../services/breachService";

function BreachChecker() {

  const [result, setResult] = useState(null);

  function handleCheck(password) {

    const response = checkPassword(password);

    setResult(response);

  }

  return (

    <div>

      <BreachInput onCheck={handleCheck} />

      <br />

      <BreachResult result={result} />

    </div>

  );

}

export default BreachChecker;