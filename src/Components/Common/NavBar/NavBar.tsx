import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

import Logo from "../../../assets/react.svg";

function NavBar() {
  const activeStyle = {
    color: "red",
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <ul className={styles.nav__links}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
