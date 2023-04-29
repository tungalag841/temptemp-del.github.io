import PropTypes from 'prop-types';
import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = ({ drawerToggleClicked, isAuth }) => {
  return (
  <header className='Toolbar1'>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className='Logo1'>
      <Logo />
    </div>

    <nav className='DesktopOnly1'>
      <NavigationItems isAuthenticated={isAuth} />
    </nav>
  </header>
  );
};

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
export default Toolbar;
