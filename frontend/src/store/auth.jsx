import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
      });
      if (response.status === 200) {
        console.log("user data", response.data.msg);
        setUser(response.data.msg);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const getServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/data/service"
      );
      if (response.status === 200) {
        console.log(response.data.data);
        setServices(response.data.data);
      }
    } catch (error) {
      console.log(`services frontend error ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        logoutUser,
        user,
        services,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
