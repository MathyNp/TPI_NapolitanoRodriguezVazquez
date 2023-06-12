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

  async function registerUser(email, password, rol) {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userFirebase) => {
      return userFirebase;
    });
    console.log(infoUser.user.uid);
    const docuRef = doc(firestone, `users/${infoUser.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();
    const rol = "User";
    const email = e.target.elements.emailField.value;
    const password = e.target.elements.passwordField.value;

    console.log("submit", email, password, rol);
    if (isRegister) {
      const username = e.target.elements.userField.value;
      registerUser(email, password, username, rol);
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
            <input
              type="email"
              class="form-control"
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
              id="exampleInputPassword1"
              placeholder="Contrasena"
              required
            />
          </div>

          {isRegister ? (
            <div class="mb-3">
              <input
                type="text"
                id="userField"
                minLength="6"
                maxLength="12"
                className="form-control"
                placeholder="UserName"
              />
            </div>
          ) : (
            <> </>
          )}
          <button type="submit" class="btn btn-primary">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>

    //         )}
    //         <input
    //           type="email"
    //           id="emailField"
    //           minLength="5"
    //           className="form-control"
    //           placeholder="Email"
    //           required
    //         ></input>
    //       </div>
    //       <div className="mb-3">
    //         <input
    //           required
    //           type="password"
    //           id="passwordField"
    //           minLength="6"
    //           maxLength="15"
    //           className="form-control"
    //           placeholder="Contraseña"
    //         ></input>
    //       </div>
    //       <div style={{ alignItems: "center" }}></div>
    //       <input
    //         type="submit"
    //         value={isRegister ? "Registrase" : "Inicia Sesion"}
    //       ></input>
    //     </form>
    //     <button onClick={() => setIsRegister(!isRegister)}>
    //       {isRegister ? "Ya tengo una cuenta" : "Quiero Registrarme"}
    //     </button>
    //   </div>
    // </div>
  );
}

export default Login;
