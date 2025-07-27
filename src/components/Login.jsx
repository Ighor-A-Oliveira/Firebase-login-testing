import { getRedirectResult, signInWithPopup} from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth, googleProvider } from '../../firebase';

export default function Login() {


 useEffect(() => {
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        console.log('sign in')
      }
    })
    .catch((error) => {
      console.error("Redirect error", error);
    });
}, []);

  async function signIn() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
     console.error("Authentication error", error);
    }
  }
  

  return (
      <button
            className="bg-black text-white p-2 rounded-xl hover:bg-gray-600"
            onClick={() => {
              signIn();
            }}
          >
            Login with Google Account
          </button>
  );
}