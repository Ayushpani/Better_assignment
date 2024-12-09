import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";

    // Only autofill if "Remember me" was previously checked
    if (storedRememberMe && storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      setMessage("Successfully Logged In!");
    } else {
      setMessage("Unsuccessful Login. Please check your credentials.");
    }

    // If "Remember Me" is checked, store credentials in localStorage
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      // If "Remember Me" is not checked, clear the credentials from localStorage
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.setItem("rememberMe", "false");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        <div className="footer-container">
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </div>
          <div className="links-container">
            <Link to="/" className="signin-link">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {message && (
        <div
          className={`message ${message.includes("Success") ? "success" : "error"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
