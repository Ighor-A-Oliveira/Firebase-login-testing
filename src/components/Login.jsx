import { getRedirectResult, signInWithRedirect} from 'firebase/auth';

import { auth, googleProvider } from '../../firebase';
import { useEffect } from 'react';

export default function Login() {
 
    useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Signed in user:", result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect error:", error);
      });
  }, []);
  

  async function signIn() {
    try {
      await signInWithRedirect(auth, googleProvider);
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