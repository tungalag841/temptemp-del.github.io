import React from "react";
import { NavLink } from "react-router-dom";

import './navigation-item.css'

const navigationItem = ({ children, link}) => {
  return (
    <li className="navItem">
      <NavLink to={link}
        end className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
      >
        {children}
      </NavLink>
    </li>
  )
};

export default navigationItem;
