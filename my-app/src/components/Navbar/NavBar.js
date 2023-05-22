import React from "react";
import closeSesion from "../LogOut";
import logooo from "../Pages/Multimedia/descarga1.png";
import "./Navbar.css";


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logooo} height={45} id="LogoGG"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse mr-auto" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/Home">
                {" "}
                Inicio{" "}
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Games">
                Juegos{" "}
              </a>
            </li>

            <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Perfil{" "}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item d" href="/EditProfile">
                    {" "}
                    Editar Perfil{" "}
                  </a>
                </li>

                <li>
                  <a class="dropdown-item d" onClick={closeSesion}>
                    {" "}
                    Cerrar Sesion{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="search-container" style={{ marginLeft: "20px" }}>
            <form action="/action_page.php">
              <input
                type="text"
                placeholder="Buscar "
                name="search"
                style={{
                  borderRadius: "30px",
                  padding: "5px",
                }}
              ></input>
            </form>
          </div>
        </div>
        
        <li class="nav-item">
          <a type="submit" href="/" class="btn btn-primary btn-sm  mr-auto">
            Iniciar Sesion
          </a>
        </li>

        {/* <li class="nav ">
          <a>My perfil</a>
        </li> */}
      </div>
    </nav>
    
  );
}

export default NavBar;
