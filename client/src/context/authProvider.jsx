import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const [isAuthticated, setIsAuthticated] = useState(false);
  const [redirectRoute, setRedirectRoute] = useState("/");

  const login = async (credentials) => {
    try {
      const res = await axios.post(
        "localhost:5000/api/auth/login",
        credentials
      );
      if (res.status === 200) {
        setIsAuthticated(true);
      }
      return res;
    } catch (err) {
      console.log("Login Failled", err);
      return null;
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setIsAuthticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthticated,
        login,
        logout,
        redirectRoute,
        setRedirectRoute,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
