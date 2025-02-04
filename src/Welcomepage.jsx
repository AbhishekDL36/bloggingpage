
  
  import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase";
import { useDispatch } from "react-redux";

export default function Signup() {
  const [user, setUser] = useState(null);
 const dispatch= useDispatch()
  // 🔹 Google Sign-In Function
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // ✅ User Data Store
      console.log("User Info:", result.user);
dispatch({
type:"getAuth",
payload:result.user
})
    } catch (error) {
      console.error("Error Signing In:", error);
    }
  };

  // 🔹 Logout Function
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt="Profile" />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}
