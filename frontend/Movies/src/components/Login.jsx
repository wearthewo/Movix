import React from "react";
import "../css/Login.css";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import FormLogin from "./FormLogin";

const Login = () => {
  return <FormLogin route={"authentication/access/token/"} />;
};

export default Login;
