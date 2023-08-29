import { createContext, useState, useEffect } from "react";
import clientAxios from "../api/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return "error";

      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const url = "/profile";
        const { data } = await clientAxios(url, config);
        setAuth(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    authUser();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
