
import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "./firebase";
import { useDispatch } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";

export default function Signup() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User Info:", result.user);
      dispatch({
        type: "getAuth",
        payload: {name:result.user,
            logout:handleLogout
        },
      });
    } catch (error) {
      console.error("Error Signing In:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nameval");
    setUser(null);
   
  };
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f0f0", // Slightly lighter background
        padding: "20px", // Padding around the content
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "400px",
          width: "100%", // Make sure the container is responsive
        }}
      >

        <p style={{marginLeft:"-54px",color:"#4285F4"}}>YOU NEED TO SIGN-IN BEFORE VIEWING</p>
        <button
          onClick={handleSignIn}
          aria-label="Sign in with Google" // Accessibility improvement
          style={{
            backgroundColor: "#4285F4",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            padding: "12px 20px",
            textTransform: "none",
            borderRadius: "30px", // Slightly more rounded
            fontSize: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s, transform 0.2s, box-shadow 0.2s",
            width: "100%",
            maxWidth: "350px",
            margin: "10px 0",
            position: "relative",
          }}
        >
          <GoogleIcon style={{ marginRight: "10px", fontSize: "24px" }} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
