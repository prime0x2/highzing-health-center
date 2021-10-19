import initAuthentication from "../Pages/Login/Firebase/firebase.init"
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {
    
    const auth = getAuth();
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const registerNewUser = (email, password, name) => {
        setLoading(true);
        setError("");
        
        return (
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setUser(null);
                    updateProfile(auth.currentUser, {displayName: name})
                        .catch((error) => {
                            setError(error.message);
                        });
                    logOut();
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    }
    
    const loginEmailPass = (email, password) => {
        setLoading(true);
        setError("");
        
        return (
            signInWithEmailAndPassword(auth, email, password)
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    }
    
    const signInGoogle = () => {
        setLoading(true);
        setError("");
        const googleProvider = new GoogleAuthProvider();
        
        
        return (
            signInWithPopup(auth, googleProvider)
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    };
    
    const logOut = () => {
        setError("");
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    
    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
        
        return () => unsubscribed;
    }, [auth]);
    
    
    useEffect(() => {
        if (error === "Firebase: Error (auth/user-not-found).") {
            setError("There is no account with this Email");
        }
        if (error === "Firebase: Error (auth/email-already-in-use).") {
            setError("This email already have an account.");
        }
        if (error === "Firebase: Error (auth/wrong-password).") {
            setError("You have entered wrong Password.");
        }
    } , [error]);
    
    
    return {
        user,
        error,
        setError,
        loading,
        logOut,
        signInGoogle,
        registerNewUser,
        loginEmailPass
    };
}


export default useFirebase;