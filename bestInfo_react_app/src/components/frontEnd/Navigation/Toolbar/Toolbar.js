import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import "./toolbar.css";

const Toolbar = (props) => (
  <div>
    <header className="Toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
    <nav className="DesktopOnly">
      <NavigationItems hide={props.sideDrawerClosedHandler}/>
    </nav>
  </div>
);

export default Toolbar;
