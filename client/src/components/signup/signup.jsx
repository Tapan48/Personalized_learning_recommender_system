import React, { useState } from "react";
import "./signup.css"; // Import your custom CSS for styling

import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  
  //     const response = await axios.post("http://localhost:3001/signup", {
  //       email,
  //       password,
  //       confirmPassword
  //     }).then((response) => {
  //       // Success!
  //       console.log(response.data);
  //     }).catch(error => {
  //       // Error!
  //       console.log("facing error:",error.message);
  //     });
      

     
   
  // };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3004/auth/signup", {
            email,
            password,
            confirmPassword
        });

        console.log(response)

        // axios.post("http://localhost:3001/signup", {
        //    email,
        //    password
        // })
        // .then((response) => {
        //   console.log(response);
        // });
        
        // Success!
        
    } catch (error) {
        // Error!
        console.log("Facing error:", error.response);
    }
};


  const handleGoogleSignUp = () => {
    // Add Google sign-up logic here
    console.log("Signing up with Google");
  };

  const handleGitHubSignUp = () => {
    // Add GitHub sign-up logic here
    console.log("Signing up with GitHub");
  };

  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <h2>SignUp</h2>
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

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>

        <div className="SignUp-options">
          <p>or sign up with:</p>
          <button type="button" className="Google" onClick={handleGoogleSignUp}>
            <i className="fab fa-google"></i> Google
          </button>
          <button type="button" className="GitHub" onClick={handleGitHubSignUp}>
            <i className="fab fa-github"></i> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
