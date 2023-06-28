import React, { useState } from "react";
import "./EditProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EditProfile = (props) => {
  const [username, setusernameNew] = useState(false);

  const [email, setEmailNew] = useState(false);

  const [password, setpasswordNew] = useState(false);

  const handleusernameNew = () => {
    setusernameNew(true);
    setEmailNew(false);
    setpasswordNew(false);
  };
  const handleEmailNew = () => {
    setEmailNew(true);
    setusernameNew(false);
    setpasswordNew(false);
  };
  const handlepasswordNew = () => {
    setpasswordNew(true);
    setusernameNew(false);
    setEmailNew(false);
  };
  return (
    <div>
      <div className="conteinerEdit">
        {props.state ? (
          <div id="formEdit">
            <div className="title">
              {" "}
              <h1> Editar perfil </h1>
            </div>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-auto col-form-label">
                <FontAwesomeIcon icon={faUser} className="icon" /> Nombre de
                usuario
              </label>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su nuevo nombre de usuario"
                  onChange={handleusernameNew}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-auto col-form-label">
                <FontAwesomeIcon icon={faLock} className="icon" /> Contraseña
              </label>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-12">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Ingrese su nuevo nombre de usuario"
                  onChange={handlepasswordNew}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-auto col-form-label">
                <FontAwesomeIcon icon={faEnvelope} className="icon" /> Correo
                electronico
              </label>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Ingrese su nuevo correo electronico"
                  onChange={handleEmailNew}
                />
              </div>
            </div>
            <button className="btn btn-light"> Guardar cambios</button>
          </div>
        ) : (
          <h1 className="errorSesion">
            Debe <a href="/#">Iniciar sesión o Registrarse</a> para poder hacer
            cambios en su perfil.
          </h1>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
