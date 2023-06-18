import React from "react";
import { app } from "../fb";

// import { useEffect } from "react";
// import { useState } from "react";

// const [usuario, setUsuario] = React.useState(null);
//   useEffect(() => {
//     app.auth().onAuthStateChanged((userFirebase) => {
//       console.log("Ya tienes iniciada sesion: ", userFirebase);
//       setUsuario(userFirebase);
//     });
//   }, []);

const closeSesion = () => {
  app.auth().signOut();
  console.log("Se a cerrado SU sesion.");
  return (
    <div>
      <button onClick={closeSesion}>LogOut</button>
    </div>
  );
};

export default closeSesion;
