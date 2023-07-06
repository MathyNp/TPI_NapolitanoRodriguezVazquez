import React, { useState } from "react";

import "./EditProfile.css";

import { getAuth, updateEmail, updatePassword } from "firebase/auth";

import firebaseApp from "../../../fb";
import ReviewsUser from "../../Reviews/ReviewsUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

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
    <div>
      <div className="conteinerEdit">
        <form id="formEdit" onSubmit={handleSubmit}>
          <h1 style={{ paddingBottom: "25px" }}>
            <FontAwesomeIcon icon={faPenToSquare} className="icon" />
            Modificar Credenciales{" "}
          </h1>
          <label>Ingrese su nuevo correo electrónico</label>
          <input
            onChange={handleEmailChange}
            type="email"
            className="form-control"
            value={newEmail}
          />
          <label>Ingrese su nueva contraseña</label>
          <input
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
            value={newPassword}
          />
          <button className="btn btn-light" type="submit">
            Guardar cambios
          </button>
        </form>
      </div>

      <div className="centerRev">
        <ReviewsUser />
      </div>
    </div>
  );
};

export default EditProfile;
