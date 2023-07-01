import React, { useState } from "react";
import "./EditProfile.css";
import { getAuth, updatePassword } from "firebase/auth";
import firebaseApp from "../../../fb";
const auth = getAuth(firebaseApp);

const EditProfile = (props) => {
  const [password, setPassword] = useState("123456789");

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    console.log(props.email);
    if (!password) {
      alert("La contraseña no puede estar vacía.");
      return;
    }
    updatePassword(user, password)
      .then(() => {
        alert("Contraseña actualizada correctamente.");
      })
      .catch((error) => {
        alert("Se produjo un error al actualizar la contraseña.");
      });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mb-3 row">
      <div className="col-sm-12">
        <form id="formEdit" onSubmit={handleSubmitPassword}>
          <input
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
            placeholder="Ingrese su nueva contraseña"
            value={password}
          />
          <button className="btn btn-light" type="submit">
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
