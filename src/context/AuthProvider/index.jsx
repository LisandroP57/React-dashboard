import React, { useState, useEffect, useContext } from "react";
import { loginUser, registerUser } from "../../services/users.service";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Alert } from "../../components/Alert";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = React.useState({
    show: false,
    type: "",
    message: "",
  });
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("_token");

  useEffect(() => {
    if (storedToken) {
      const decodedToken = storedToken ? jwt_decode(storedToken) : null;
      const { user } = decodedToken ? decodedToken.payload : null;
      setCurrentUser(user);
      return navigate("/");
    }
  }, []);

  const register = (data) => {
    setLoading(true);
    registerUser(data)
      .then((res) => {
        if (res.ok && res.status === 201) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then(({ msg }) => {
        setAlert({
          message: msg,
          type: "success",
          show: true,
        });
        setTimeout(() => navigate("/signin"), 2000);
      })
      .catch((error) => {
        setAlert({
          message: error.errors.custom.msg,
          type: "danger",
          show: true,
        });
      })
      .finally(() => setLoading(false));
  };

  const login = (data) => {
    setLoading(true);

    loginUser(data)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.json());
        }
      })
      .then(({ token }) => {

        window.localStorage.setItem("_token", token);

        const decodedToken = token ? jwt_decode(token) : null;
        const { user } = decodedToken ? decodedToken.payload : null;
        setCurrentUser(user);

        return navigate("/");
      })
      .catch((error) => {
        console.log(error)
        setAlert({
          message: error,
          type: "danger",
          show: true,
        })
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("_token");
    navigate("/signin");
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={value}>
      {alert.show && <Alert alert={alert} setAlert={setAlert} />}
      {children}
    </AuthContext.Provider>
  );
};