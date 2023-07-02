import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Scrollbar.css";

import React, { useContext, useEffect, useState } from "react";
import firebaseApp from "./fb";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import NavBar from "./components/Navbar/NavBar";

import Routess from "../src/components/Routess";
import Footer from "../src/components/Footer/Footer";
import { ThemeContext } from "./components/Services/ThemeContext";
import EditProfile from "./components/Pages/EditProfile/EditProfile";

const auth = getAuth(firebaseApp);
const firestone = getFirestore(firebaseApp);

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className={`${theme === "light" && "light-theme"} App`}>
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

      {user ? (
        <Routess
          rol={user.rol}
          state={user}
          username={user.username}
          email={user.email}
        />
      ) : (
        <Routess />
      )}

      <Footer />
    </div>
  );
};

export default App;
