import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebaseCofig";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  

  const createNewUser = (email, passwrod) =>{
    return createUserWithEmailAndPassword(auth, email, passwrod)
  };

  const userLogin = (email, passwrod) =>{
    return signInWithEmailAndPassword(auth, email, passwrod)
  }




  const logOut=()=>{
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin
  };

  useEffect(()=>{
   const Unsubscirb = onAuthStateChanged(auth , (currentUser) =>{
      setUser(currentUser)
    });
    return() =>{
      Unsubscirb()
    }
  },[])

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

};

export default AuthProvider;