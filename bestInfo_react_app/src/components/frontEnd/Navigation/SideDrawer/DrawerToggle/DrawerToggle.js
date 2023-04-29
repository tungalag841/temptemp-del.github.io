import React from "react";

import "./drawerToggle.css";

const drawerToggle = (props) => {
  return(
    <div className="DrawerToggle" onClick={props.clicked}>
       <div className="Draw"></div>
       <div></div>
       <div></div>
  </div>
  )
}

export default drawerToggle;
