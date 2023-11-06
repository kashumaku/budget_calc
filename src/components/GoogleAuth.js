import React, { useState } from "react";
import { auth, app, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleAuth = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [er, setEr] = useState("nono");
  const signin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user.displayName);
      setEmail(result.user.email);
      setPhoto(result.user.photoURL);
      console.log(result);
    } catch (err) {
      setEr("something went wrong try again");
      console.log("error11111111", err);
      console.log(er);
    }
  };
  return (
    <>
      <button onClick={signin}>Sign in with google</button>
      {user && (
        <>
          <h1>{user} Signed in</h1>
          <h3>Email: {email}</h3>
          <img src={photo} alt="" width={400} height={500} />
          {er && <p>{er}</p>}
        </>
      )}
    </>
  );
};

export default GoogleAuth;
