import React from "react";
import { useState } from "react";
import url from "../interceptor";
import { useNavigate } from "react-router-dom";
import { ACCESS, REFRESH } from "../globals";
import "../css/Login.css";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const FormLogin = ({ route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await url.post(route, { username, password });
      if (res.status === 200) {
        localStorage.setItem(ACCESS, res.data.access);
        localStorage.setItem(REFRESH, res.data.refresh);
        nav("/movies");
      } else {
        nav("/");
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <h1>Login</h1>
      <div>
        <input
          className="input-box"
          type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        >
          <FaUserAstronaut />
        </input>
      </div>

      <div>
        <input
          className="input-box"
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setUsername(e.target.value)}
        >
          <RiLockPasswordFill />
        </input>
      </div>
      <div className="remember-forget">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Login</button>
      <div className="register-link">
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
