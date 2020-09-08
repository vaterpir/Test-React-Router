import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Menu } from "./Menu/Menu";
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
const getAxios = (url) =>
  axios
    .get(url, {
      baseURL: baseURL,
      params: {
        key: keyURL,
      },
    })
    .then(function (response) {
      state.resData[url] = response;
      console.log(state);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

window.onload = () => {
  getAxios("characters");
  getAxios("spells");
};

export const App = () => {
  const [pathRout, setPathRout] = useState("");
  return (
    <Router>
      <div className="content">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/professors">
            <Professors />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/extra">
            <Extra />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}; /* 

/other
/extra */

/*          <Route path="/dashboard">
          <Dashboard />
        </Route>


<Router>
    <div>
      <div className="navbar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router> */
