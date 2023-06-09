import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser):"";
  });

  const removeCurrentUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(localStorage)
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        removeCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};