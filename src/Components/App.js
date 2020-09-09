import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Profile } from "./Profile";
import { Home } from "./Home/Home";
import { Professors } from "./Professors/Professors";
import { Students } from "./Students/Students";
import { Other } from "./Other/Other";
import { Extra } from "./Extra/Extra";

const baseURL = "https://www.potterapi.com/v1/";
const keyURL = "$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme";

const state = {
  resData: {},
};
const getAxios = (url, setData) =>
  axios
    .get(url, {
      baseURL: baseURL,
      params: {
        key: keyURL,
      },
    })
    .then(function (response) {
      state.resData[url] = response;
      setData(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

export const App = () => {
  const [characters, setCharacters] = useState(false);
  const [spells, setSpells] = useState(false);

  useEffect(() => {
    getAxios("characters", setCharacters);
    getAxios("spells", setSpells);
  });

  return (
    <Router>
      <div className="content">
        <div className="menu">
          <Link to="/">Главная</Link>
          <Link to="/professors">Учителя</Link>
          <Link to="/students">Ученики</Link>
          <Link to="/other">Прочие</Link>
          <Link to="/extra">Особое</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home data={characters} />
          </Route>
          <Route exact path="/professors">
            <Professors data={characters} />
          </Route>
          <Route exact path="/students">
            <Students data={characters} />
          </Route>
          <Route exact path="/other">
            <Other data={characters} />
          </Route>
          <Route exact path="/extra">
            <Extra data={spells} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
