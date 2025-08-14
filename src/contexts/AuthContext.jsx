import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogin");
    if (loggedIn === "true") {
        setIsLogin(true);
    }
  }, []);

  const login = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
