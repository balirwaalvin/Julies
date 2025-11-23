import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebaseConfig';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  deleteUser,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthContext: Initializing auth listener");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("AuthContext: Auth state changed", currentUser ? "User logged in" : "No user");
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: name
    });
    return userCredential;
  };

  const logout = () => {
    return signOut(auth);
  };

  const removeAccount = () => {
    if (auth.currentUser) {
      return deleteUser(auth.currentUser);
    }
    return Promise.reject("No user logged in");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, removeAccount }}>
      {children}
    </AuthContext.Provider>
  );
};
