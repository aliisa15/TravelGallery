import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import './SignIn.css';

const auth = getAuth();

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [signInError, setSignInError] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSignInSuccess(true);
            })
            .catch((error) => {
                setSignInError("Login failed. Please check your email and password.");
                console.log("Sign-in failed. Error:", error.message);
            });
       
    };
  
    return (
        <div className='sign-in-container'>
            {!signInSuccess ? (
                <form onSubmit={signIn}>
                    <h1>Log in</h1>
                    {signInError && (
                        <div>
                            <p>{signInError}</p>
                        </div>
                    )}
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button type="submit">Log in</button>
                </form>
            ) : (
                <div>
                    
                </div>
            )}
        </div>
    );
};

export default SignIn;
