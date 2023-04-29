import React from "react";
import Logo from "../assets/logo.png";

import "./logo.css";

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={Logo} alt="MyBurger" />
  </div>
);

export default logo;
