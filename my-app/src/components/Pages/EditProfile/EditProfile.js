import React, { useState } from "react";

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
      {props.state ? (
        <>
          <h1>Modificar Perfil.</h1> <h2>¡Hola {props.username}!</h2>
          <div>
            <p>¿Que desea modificar?</p>

            <button type="submit" onClick={handleusernameNew}>
              Nombre de Usuario
            </button>
            <button onClick={handleEmailNew}>Email registrado</button>
            <button onClick={handlepasswordNew}>Contraseña</button>
          </div>{" "}
        </>
      ) : (
        <p>Registrese para hacer cambios en su perfil.</p>
      )}
      {username ? (
        <>
          <div>
            <form>
              <label>Ingrese su nuevo nombre de Usuario.</label>
              <input type="text" minLength="6" maxLength="12"></input>
              <button>Cambiar nombre de usuario</button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
      {email ? (
        <>
          <div>
            <form>
              <label>Ingrese su nuevo email</label>
              <input
                type="text"
                minLength="6"
                maxLength="12"
                placeholder="Nuevo email"
              ></input>
              <button>Cambiar email</button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
      {password ? (
        <>
          <div>
            <form>
              <label>Ingrese su nueva contraseña.</label>
              <input
                type="text"
                minLength="6"
                maxLength="12"
                placeholder="Nueva contraseña"
              ></input>
              <button>Cambiar contraseña</button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EditProfile;
