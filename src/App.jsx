import { useEffect } from "react";
import Login from "./components/Login";
import { getRedirectResult } from "firebase/auth";
import { auth } from "../firebase";


function App() {

  useEffect(() => {
    console.log("🔍 Checking for redirect login result...");
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("✅ Logged in user:", result.user);
        } else {
          console.log("⛔ No user returned from redirect");
        }
      })
      .catch((error) => {
        console.error("🔥 Error during login redirect:", error);
      });
  }, []);

  return(
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <Login/>
    </div>
  )
}

export default App;
