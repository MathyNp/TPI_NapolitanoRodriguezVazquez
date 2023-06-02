import React from "react";
import Game from "../../GameItem/GameItems";
import NavBar from "../../NavbarLogOut";

const Home = () => {
  return (
    <div>
      <div className="text-bg-dark p-3">
        ¡Bienvenidos a nuestra página web, el destino ideal para todos los
        amantes de los videojuegos! Somos un equipo apasionado de jugadores que
        ha creado un tracker de videojuegos único en su tipo, basado
        exclusivamente en las valoraciones de nuestra increíble comunidad de
        usuarios. Y lo mejor de todo es que ¡es completamente gratuito!
      </div>

      <Game />
    </div>
  );
};

export default Home;
