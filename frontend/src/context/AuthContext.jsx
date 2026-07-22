import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const savedUser = localStorage.getItem("pg_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);

  function login(email) {

    const loggedInUser = {
      name: email.split("@")[0],
      email,
    };

    localStorage.setItem(
      "pg_user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

  }

  function logout() {

    localStorage.removeItem("pg_user");

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}