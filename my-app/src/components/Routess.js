import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/LoginPage/Login";
import Error404 from "./Pages/Error404/Error404";
import EditProfile from "./Pages/EditProfile/EditProfile";
import GamesPage from "./Pages/GamesPages/GamesPage";
import Home from "./Pages/Home/Home";
import AddGame from "./Pages/AddGame/AddGame";
import GamesReviews from "./GameReviews/GameReviews";

import data from "../games.json";

function Routess(props) {
  return (
    <Router>
      <Routes>
        {props.state ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/EditProfile"
          element={
            <EditProfile
              username={props.username}
              state={props.state}
              rol={props.rol}
              email={props.email}
            />
          }
        />
        <Route path="/Games" element={<GamesPage />} />
        {data.map((games, key) => (
          <Route
            key={games.id}
            id={games.id}
            path={`/${games.name}`}
            element={
              <GamesReviews
                name={games.name}
                img={games.img}
                genre={games.genre}
                platform={games.platform}
                developer={games.developer}
                id={games.id}
                description={games.description}
                score={games.score}
              />
            }
          />
        ))}
        <Route exact path="/addgame" element={<AddGame />} />
      </Routes>
    </Router>
  );
}

export default Routess;
