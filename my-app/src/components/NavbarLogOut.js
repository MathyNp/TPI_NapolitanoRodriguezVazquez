import React from "react";
import closeSesion from "./LogOut";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
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
              <a class="nav-link active" aria-current="page" href="/Home">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Games">
                Juegos
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
                My Perfil
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/EditProfile">
                    Editar Perfil
                  </a>
                </li>
                <li>
                  <a class="dropdown-item ">Cerrar Sesion.</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <li class="nav-item">
          <a
            type="submit"
            href="#"
            class="btn btn-alert btn-sm  mr-auto"
            onClick={closeSesion}
          >
            Cerrar Sesion.
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
