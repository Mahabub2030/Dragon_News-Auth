import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebaseCofig";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loding, setLoding] = useState(true)
  // console.log(loding,user);
  
// here create user code
  const createNewUser = (email, passwrod) =>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, passwrod)
  };
// here user login 
  const userLogin = (email, passwrod) =>{
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, passwrod)
  }
// here logOut code
  const logOut=()=>{
    setLoding(true)
    return signOut(auth)
  }
  // here update profile
  const updateUserProfile = (updateData)=>{
    return updateProfile(auth.currentUser, updateData);
  }


  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loding,
    updateUserProfile
  };

  useEffect(()=>{
   const Unsubscirb = onAuthStateChanged(auth , (currentUser) =>{
      setUser(currentUser);
      setLoding(false);
    });
    return() =>{
      Unsubscirb()
    }
  },[]);
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

};

export default AuthProvider;