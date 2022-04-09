import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});


    const signInWithGoogle = () =>{
       signInWithPopup(auth, googleProvider)
       .then((result)=>{
           const user = result.user;
           setUser(user);
           console.log(user);
       })
       .catch((error)=>{
           console.error(error.message)
       }) 
    }

    const signOutFromGoogle =()=>{
        signOut(auth)
        .then(()=>{
            console.log('Sign Out Successfully');
        })
        .catch((error)=>{
            console.log('khaiso dhora');
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    },[])
    return {user,
        signOutFromGoogle,
        signInWithGoogle
    }
}

export default useFirebase;