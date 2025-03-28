import { createContext, useEffect, useState } from "react";
import app from "./firebase.init";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
      return signOut(auth);
    };
    const authInfo=
    {
        user,
        setUser,
        createNewUser,
        logOut
    };


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    
      return () => unsubscribe(); 
    }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, createNewUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
