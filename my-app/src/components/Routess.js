import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/LoginPage/Login";
import Game from "./GameItem/GameItems";
import Error404 from "./Pages/Error404/Error404";
import EditProfile from "./Pages/EditProfile/EditProfile";
import GamesPage from "./Pages/GamesPages/GamesPage";
import Home from "./Pages/Home";
function Routess(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="*" element={<Error404 />} />
          <Route
            exact
            path="/EditProfile"
            element={
              <EditProfile
                username={props.username}
                state={props.state}
                rol={props.rol}
              />
            }
          />
          <Route exact path="/Games" element={<GamesPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Routess;
