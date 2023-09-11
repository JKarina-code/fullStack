import { createContext, useState, useEffect } from "react";
import clientAxios from "../api/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return "error";
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios("/vets/profile", config);

        setAuth(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }

      setLoading(false);
    };
    authUser();
  }, []);

  const signOff = () => {
    localStorage.removeItem("token");
    setAuth({});
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, signOff }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
