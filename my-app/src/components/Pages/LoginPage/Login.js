import React, { useState } from "react";
import firebaseApp from "../../../fb";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);
const firestone = getFirestore(firebaseApp);

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const navigation = useNavigate();

  async function registerUser(email, password, username, rol) {
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

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.emailField.value;
    const password = e.target.elements.passwordField.value;
    // const username = e.target.elements.userField.value;

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
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "50px",
          backgroundColor: "#212529",
          padding: "50px",
          borderRadius: "40px",
        }}
      >
        <form
          style={{
            textAlign: "center",
            width: "400px",
          }}
          onSubmit={submitHandler}
        >
          <div class="mb-3">
            {isRegister ? (
              <div class="mb-3">
                <input
                  type="text"
                  id="userField"
                  maxLength="12"
                  className="form-control"
                  placeholder="UserName"
                />
              </div>
            ) : (
              <> </>
            )}
            <input
              type="email"
              className="form-control"
              id="emailField"
              aria-describedby="emailHelp"
              placeholder="Email"
              minLength="5"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="passwordField"
              placeholder="Contraseña"
              minLength="6"
              maxLength="15"
              required
            />
          </div>

          <input
            type="submit"
            class="btn btn-primary"
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
