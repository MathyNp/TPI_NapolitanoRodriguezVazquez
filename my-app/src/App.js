import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import firebaseApp from "./fb";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import NavBar from "./components/Navbar/NavBar";
import Login from "./components/Pages/LoginPage/Login";
import Routess from "../src/components/Routess";
import Footer from "../src/components/Footer/Footer";

const auth = getAuth(firebaseApp);
const firestone = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestone, `users/${uid}`);
    const docuEncrypted = await getDoc(docuRef);
    const inff = docuEncrypted.data().rol;
    return inff;
  }
  function userFirebaseData(userFirebase) {
    getRol(userFirebase.uid).then((rol) => {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userdata", userData);
    });
  }

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      if (!user) {
        userFirebaseData(userFirebase);
      }
    } else {
      setUser(null);
    }
  });
  return (
    <div className="App">
      {user ? <NavBar rol={user.rol} state={user} /> : <NavBar />}
      {user ? <Routess rol={user.rol} state={user} /> : <Routess />}
      <Footer />
    </div>
  );
}

export default App;
