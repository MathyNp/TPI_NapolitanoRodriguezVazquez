import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useContext, useState } from "react";
import ReactSwitch from 'react-switch'
import firebaseApp from "./fb";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ThemeContext } from "./components/Context/ThemeContext";
import NavBar from "./components/Navbar/NavBar";

import Routess from "../src/components/Routess";
import Footer from "../src/components/Footer/Footer";

import "../src/Scrollbar.css";

const auth = getAuth(firebaseApp);
const firestone = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext)
  
  const [checked, setChecked] = useState(false)
  

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
 
  const handlerSwitch = (nextChecked) => {
    debugger;
    // toggleTheme(theme === 'Light'? 'Dark': 'Light')
    setChecked(nextChecked)
  }

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
      <ReactSwitch
      checked={checked}
      onChange={handlerSwitch}
      // onColor="#86d3ff"
      // onHandleColor="#2693e6"
      handleDiameter={30}
      // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      // className="react-switch"
      // id="material-switch"
      />
      <Footer />
    </div>
  );
}

export default App;
