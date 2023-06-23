import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Login from "./Pages/LoginPage/Login";

import Error404 from "./Pages/Error404/Error404";
import EditProfile from "./Pages/EditProfile/EditProfile";
import GamesPage from "./Pages/GamesPages/GamesPage";
import Home from "./Pages/Home/Home";

import data from "../games.json";

import GamesReviews from "./GameReviews/GameReviews";

function Routess(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {props.state ? <></> : <Route exact path="/" element={<Login />} />}

          <Route exact path="/home" element={<Home />} />
          <Route exact path="*" element={<Error404 />} />
          <Route
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
          {data.map((games, key) => (
            <Route
              key={games.id}
              id={games.id}
              path={`${games.name}`}
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Routess;
