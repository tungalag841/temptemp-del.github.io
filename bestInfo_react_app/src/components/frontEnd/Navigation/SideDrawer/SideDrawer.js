import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import "./sideDrawer.css";

const SideDrawer = ({open,closed1,hide}) => {
  let attachedClasses = ['SideDrawer1', 'Close'];
  if (open) {
    attachedClasses = ['SideDrawer1', 'Open'];
  }
  return (
    <>
     <Backdrop show={open} clicked={closed1}/>
      <div className={attachedClasses.join(" ")} style={{overflow: 'scroll'}}>
        <div className='Logo'>
          <Logo />
        </div>
        <nav className="nu">
          <NavigationItems hide={hide}/>
        </nav>
      </div>
    </>
     
  )
};

export default SideDrawer;
