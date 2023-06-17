import React, { useState } from "react";
import firebaseApp from "../../../fb";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestone = getFirestore(firebaseApp);

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  async function registerUser(email, password, username) {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userFirebase) => {
      return userFirebase;
    });
    console.log(infoUser.user.uid);
    const docuRef = doc(firestone, `users/${infoUser.user.uid}`);
    setDoc(docuRef, { correo: email, rol: "User", username: username });
  }

  async function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.emailField.value;
    const password = e.target.elements.passwordField.value;

    console.log("submit", email, password);
    if (isRegister) {
      const username = e.target.elements.userField.value;
      registerUser(email, password, username);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <form
          style={{ textAlign: "center", width: "350px" }}
          onSubmit={submitHandler}
        >
          <div className="mb-3">
            {isRegister ? (
              <input
                type="text"
                id="userField"
                minLength="6"
                maxLength="12"
                className="form-control"
                placeholder="UserName"
              ></input>
            ) : (
              <></>
            )}
            <input
              type="email"
              id="emailField"
              minLength="5"
              className="form-control"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="mb-3">
            <input
              required
              type="password"
              id="passwordField"
              minLength="6"
              maxLength="15"
              className="form-control"
              placeholder="Contraseña"
            ></input>
          </div>
          <div style={{ alignItems: "center" }}></div>
          <input
            type="submit"
            value={isRegister ? "Registrase" : "Inicia Sesion"}
          ></input>
        </form>
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Ya tengo una cuenta" : "Quiero Registrarme"}
        </button>
      </div>
    </div>
  );
}

export default Login;
