import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
   // const { signInWithGoogle} = useFirebase();
   const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Log In</h2>
            <div style={{margin: '20px'}}>
                <button onClick={()=> signInWithGoogle()}>Google SignIn</button>
            </div>
            <form>
                
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;