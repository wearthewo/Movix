import { useState } from "react";
import url from "../interceptor";
import "../css/Login.css";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const FormRegister = ({ route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await url.post(route, { username, password });
      if (res.status === 200) {
        nav("/");
      } else {
        nav("/register");
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <h1>Register</h1>
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
          onChange={(e) => setPassword(e.target.value)}
        >
          <RiLockPasswordFill />
        </input>
      </div>
      <div className="remember-forget">
        <label>
          <input type="checkbox" />I agree to the terms and conditions
        </label>
      </div>
      <button type="submit">Register</button>
      <div className="register-link">
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
