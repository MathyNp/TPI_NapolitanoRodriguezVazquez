import React, { useState } from "react";
import "./EditProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

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
            <h1 className="tittle-form">Modificar Perfil.</h1>{" "}
            <div>
              <form class="row row-cols-lg-auto g-3 align-items-center mb-2">
                <div class="col-13">
                  <div class="input-group">
                    <div class="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Introduce tu nuevo nombre de usuario"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-light"
                    onClick={handleusernameNew}
                  >
                    Cambiar
                  </button>
                </div>
              </form>
              {/* Editar email */}
              <form class="row row-cols-lg-auto g-3 align-items-center mb-2">
                <div class="col-12">
                  <label
                    class="visually-hidden"
                    for="inlineFormInputGroupUsername"
                  >
                    Username
                  </label>
                  <div class="input-group">
                    <div class="input-group-text">
                      {" "}
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-light"
                    onClick={handleEmailNew}
                  >
                    Cambiar
                  </button>
                </div>
              </form>
              {/* Editar password */}
              <form class="row row-cols-lg-auto g-3 align-items-center">
                <div class="col-12">
                  <label
                    class="visually-hidden"
                    for="inlineFormInputGroupUsername"
                  >
                    Username
                  </label>
                  <div class="input-group">
                    <div class="input-group-text">
                      {" "}
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-light"
                    onClick={handlepasswordNew}
                  >
                    Cambiar
                  </button>
                </div>
              </form>
            </div>{" "}
          </div>
        ) : (
          <h1 className="errorSesion">
            Debe <a href="/#"> Iniciar sesion o Registrarse</a> para poder hacer
            cambios en su perfil.
          </h1>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
