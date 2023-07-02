import React, { useState } from "react";
import "./EditProfile.css";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import firebaseApp from "../../../fb";

const auth = getAuth(firebaseApp);

const EditProfile = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!newEmail && !newPassword) {
      alert("Debe ingresar al menos un campo para actualizar.");
      return;
    }

    if (newEmail) {
      updateEmail(user, newEmail)
        .then(() => {
          alert("Correo electrónico actualizado correctamente.");
        })
        .catch((error) => {
          alert("Se produjo un error al actualizar el correo electrónico.");
        });
    }

    if (newPassword) {
      updatePassword(user, newPassword)
        .then(() => {
          alert("Contraseña actualizada correctamente.");
        })
        .catch((error) => {
          alert("Se produjo un error al actualizar la contraseña.");
        });
    }
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div className="mb-3 row">
      <div className="col-sm-12">
        <form id="formEdit" onSubmit={handleSubmit}>
          <input
            onChange={handleEmailChange}
            type="email"
            className="form-control"
            placeholder="Ingrese su nuevo correo electrónico"
            value={newEmail}
          />
          <input
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
            placeholder="Ingrese su nueva contraseña"
            value={newPassword}
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
