import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <div className="menu">
      <Link to="/">Домой</Link>
      <Link to="/professors">Учителя</Link>
      <Link to="/students">Студенты</Link>
      <Link to="/other">Прочие</Link>
      <Link to="/extra">Особое</Link>
    </div>
  );
};
