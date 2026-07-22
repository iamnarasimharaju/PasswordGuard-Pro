import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import { useAuth } from "../hooks/useAuth";

function Login() {

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {

    e.preventDefault();

    if (!email.trim() || !password.trim()) {

      alert("Please enter email and password.");

      return;

    }

    login(email);

  }

  return (

    <div className="login-page">

      <div className="login-card">

        <ShieldCheck
          size={60}
          color="#3b82f6"
        />

        <h1>PasswordGuard Pro</h1>

        <p>
          Enterprise Password Security Suite
        </p>

        <form onSubmit={handleLogin}>

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            className="login-input"

          />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            className="login-input"

          />

          <button
            className="btn btn-primary login-btn"
            type="submit"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;