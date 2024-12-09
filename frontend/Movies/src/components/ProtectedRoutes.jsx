import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import url from "../interceptor";
import { jwtDecode } from "jwt-decode";
import { ACCESS, REFRESH } from "../globals";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProtectedRoutes = ({ children }) => {
  const [IsAuth, setIsAuth] = useState(null);
  useEffect(() => {
    checkAuth().catch(() => setIsAuth(false));
  }, []);
  const refresh = async () => {
    const ref = localStorage.getItem(REFRESH);
    try {
      const res = await url.post("/authentication/refresh/token", {
        refresh: ref,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS, res.data.access);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (err) {
      setIsAuth(false);
    }
    console.log(err);
  };
  const checkAuth = async () => {
    const token = localStorage.getItem(ACCESS);
    if (!token) {
      setIsAuth(false);
      return;
    }
    const jwt = jwtDecode(token);
    if (Date.Now() / 1000 > jwt.exp) {
      await refresh();
    } else {
      setIsAuth(true);
    }
  };

  if (IsAuth === null) {
    return <AiOutlineLoading3Quarters />;
  }
  return IsAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
