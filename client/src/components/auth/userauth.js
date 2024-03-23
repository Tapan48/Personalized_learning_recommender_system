import { useState, useEffect } from 'react';
import axios from 'axios';

const UseAuth = () => {

  console.log("useauth comp running");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {   
    
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Get the JWT token from local storage
      const token = localStorage.getItem("token");    
  console.log("before condition=="+token)

      if (!token) {
        // No token found in local storage
        setAuthenticated(false);
        return;
      }
      // Send a request to the backend to verify the token using Axios
      const response = await axios.get('http://localhost:3004/auth/verifyToken', {  
        headers: {
          Authorization: token // Attach the token in the Authorization header
        }
      }).then(res => console.log("response===" + JSON.stringify(res)))
      // console.log("HEADERS ===="+response.headers)
      // if (response) {
      //   setAuthenticated(true);
      // } else {
      //   setAuthenticated(false);
      // }
    } catch (error) {
      console.log("HEADERS ===="+error.headers)
      console.error('Error verifying token:', error);
      setAuthenticated(false);
    }
  };

  // return { authenticated };
};

export default UseAuth;
