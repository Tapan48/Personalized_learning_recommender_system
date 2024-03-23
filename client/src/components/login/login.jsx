import React, { useState } from "react";
import "./login.css"; // Import your custom CSS for styling
import { useCookies } from "react-cookie";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3004/auth/login", {
        email,
        password,
      });
      const token = response.data.data;
      console.log(token); 

      localStorage.setItem('token', token);
      window.location.href = "/useauth";

      // console.log(localStorage)
      // Store token in a <cookie></cookie>
      // setCookie("token", token, );
      // console.log(cookies.token)
      
      
      // console.log(response);
    } catch (error) {
      console.error("error logging up:", error);
    }
  };

  const handleGoogleLogin = () => {
    // Add GitHub login logic here
    console.log("Logging in with google");
  };

  const handleGitHubLogin = () => {
    // Add GitHub login logic here
    console.log("Logging in with GitHub");
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>

        <div className="Login-options">
          <p>or sign in with:</p>

          <button type="button" className="Google" onClick={handleGoogleLogin}>
            <i className="fab fa-google"></i> Google
          </button>
          <button type="button" className="GitHub" onClick={handleGitHubLogin}>
            <i className="fab fa-github"></i> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
