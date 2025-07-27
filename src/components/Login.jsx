import { signInWithPopup} from 'firebase/auth';

import { auth, googleProvider } from '../../firebase';

export default function Login() {
 
  

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