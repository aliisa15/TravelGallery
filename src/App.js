import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "./firebase";
import SignIn from './components/SignIn';
import Home from "./components/Home";
import './App.css';
import logo from './TravelGallery.jpg';

function App() {
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setSignInSuccess(!!user);
      setInitialCheck(true); 
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignInSuccess(false);

      })
      .catch((error) => {
        console.log("Sign-out failed. Error:", error.message);
      });
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </div>
      <div className="content">
        {initialCheck && (
          <>
            {user ? (
              <>
                <div>
                  <Home />
                  <button onClick={handleSignOut}>Log out</button>
                </div>
              </>
            ) : (
              <SignIn setSignInSuccess={setSignInSuccess} />
            )}
          </>

        )}
      </div>
    </div >
  );
}

export default App;