import React, { createRef, useState,useEffect } from "react";
import { app } from "../../../fb";


const Login = (props) => {



  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
  app.auth().onAuthStateChanged((userFirebase) => {
       console.log("Ya tienes iniciada sesion: ", userFirebase);
    setUsuario(userFirebase);
     });
   }, []);

  const [isRegistered, setRegister] = React.useState(false);
  const createUser = (email1, password1) => {
    console.log(email1, password1);
    app
      .auth()
      .createUserWithEmailAndPassword(email1, password1)
      .then((userFirebase) => {
        console.log("User Created: ", userFirebase);
        props.setUsuario(userFirebase);
      });
  };
  const logInUser = (email1, password1) => {
    app
      .auth()
      .signInWithEmailAndPassword(email1, password1)
      .then((userFirebase) => {
        console.log("Sesion iniciada con: ", userFirebase.user);
        props.setUsuario(userFirebase);
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const email1 = e.target.emailField.value;
    const password1 = e.target.passwordField.value;
    if (isRegistered) {
      createUser(email1, password1);
    }
    if (!isRegistered) {
      logInUser(email1, password1);
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "50px",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{ textAlign: "center", width: "350px" }}
      >
        <div class="mb-3">
          <input
            type="email"
            id="emailField"
            minLength="5"
            class="form-control"
            placeholder="Email"
            required
          ></input>
        </div>
        <div class="mb-3">
          <input
            required
            type="password"
            id="passwordField"
            minlength="6"
            maxLength="15"
            class="form-control"
            placeholder="Contraseña"
          ></input>
        </div>
        <div style={{ alignItems: "center" }}>
          <button
            onClick={() => setRegister(!isRegistered)}
            class="btn btn-dark btn-sm"
            style={{ margin: "10px" }}
          >
            {isRegistered
              ? "¿Ya tienes una cuenta? Iniciar Sesion"
              : " No tienes cuenta? Registrate aqui"}
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-dark btn-sm"
            style={{ margin: "10px" }}
          >
            {""}
            {isRegistered ? "Registrarse" : "Inicia Sesion"}
            {""}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
