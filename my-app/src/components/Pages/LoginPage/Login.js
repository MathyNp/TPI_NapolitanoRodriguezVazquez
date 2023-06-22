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
  const navigation = useNavigate("");

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
    setDoc(docuRef, { correo: email, rol: rol, username: username });
  }

  async function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.emailField.value;
    const password = e.target.elements.passwordField.value;

    console.log("submit", email, password);
    if (isRegister) {
      const username = e.target.elements.userField.value;
      const rol = "User";
      registerUser(email, password, username, rol)
        .then(() => navigation("/home"))
        .catch((error) => {
          alert("Hola");
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation("/home"))
        .catch((error) => {
          alert("Hola");
          console.log(error);
        });
    }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "50px",
          backgroundColor: "#212529",
          padding: "auto",
          paddingTop: "30px",
          paddingBottom: "40px",
          borderRadius: "20px",
          width: "450px",
          borderBottom: "5px solid coral",
        }}
      >
        <form
          style={{
            textAlign: "center",
            width: "350px",
          }}
          onSubmit={submitHandler}
        >
          <h2 style={{ color: "whitesmoke" }}>
            {" "}
            {isRegister ? "Formulario de registro" : "Iniciar sesion"}{" "}
          </h2>
          <div className="mb-3">
            {isRegister ? (
              <div className="mb-3">
                <input
                  type="text"
                  id="userField"
                  maxLength="17"
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="passwordField"
              placeholder="Contraseña"
              minLength="6"
              maxLength="15"
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-light"
            value={isRegister ? "Registrase" : "Inicia Sesion"}
          ></input>

          <button
            onClick={() => setIsRegister(!isRegister)}
            className="btn btn-light"
            style={{ marginLeft: 7 }}
          >
            {isRegister ? "Ya tengo una cuenta" : "Quiero Registrarme"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
