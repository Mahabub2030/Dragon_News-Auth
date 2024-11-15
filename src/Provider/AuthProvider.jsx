import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebaseCofig";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email, passwrod) =>{
    return createUserWithEmailAndPassword(auth, email, passwrod)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

};

export default AuthProvider;