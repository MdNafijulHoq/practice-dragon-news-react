import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLaoding] = useState(true);

    const createUser = (email,password) => {
        setLaoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser)
            setUser(currentUser)
            setLaoding(false);
        });
        return () => { 
            unSubscribe();
        }
    } ,[])

    const logOut = () => {
        setLaoding(true)
        return signOut(auth)
    }

    const signIn = (email, password) => {
        setLaoding(true)
         return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user, createUser, logOut, signIn, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}