import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import firebaseApp from "./fb";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import NavBar from "./components/Navbar/NavBar";

import Routess from "../src/components/Routess";
import Footer from "../src/components/Footer/Footer";
import Loader from "./components/Loader/Loader";
const auth = getAuth(firebaseApp);
const firestone = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getUsername(uid) {
    const docuRef = doc(firestone, `users/${uid}`);
    const docuEncrypted = await getDoc(docuRef);
    const inff1 = docuEncrypted.data().username;
    return inff1;
  }
  async function getRol(uid) {
    const docuRef = doc(firestone, `users/${uid}`);
    const docuEncrypted = await getDoc(docuRef);
    const inff = docuEncrypted.data().rol;
    return inff;
  }
  // // FUNCION DONDE SE GUARDAN LOS DATOS DEL USUARIO CREADO.
  // function userFirebaseData(userFirebase) {
  //   getUsername(userFirebase.uid).then((username) => {
  //     const userData = {
  //       uid: userFirebase.uid,
  //       email: userFirebase.email,
  //       username: username,
  //     };
  //     setUser(userData);
  //     console.log("userdata", userData);
  //   });
  // }
  function userFirebaseRol(userFirebase) {
    setLoading(true);
    getRol(userFirebase.uid).then((rol) => {
      getUsername(userFirebase.uid).then((username) => {
        const userData = {
          uid: userFirebase.uid,
          email: userFirebase.email,
          rol: rol,
          username: username,
        };
        setUser(userData);
        console.log("userdata", userData);
      });
      setLoading(false);
    });
  }
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      if (!user) {
        userFirebaseRol(userFirebase);
      }
    } else {
      setUser(null);
    }
  });
  return (
    <div className="App">
      {user ? (
        <NavBar
          state={user}
          username={user.username}
          rol={user.rol}
          loading1={loading}
        />
      ) : (
        <NavBar loading1={loading} />
      )}
      {/* {loading && <Loader />} */}
      {user ? (
        <Routess rol={user.rol} state={user} username={user.username} />
      ) : (
        <Routess />
      )}
      <Footer />
    </div>
  );
}

export default App;
