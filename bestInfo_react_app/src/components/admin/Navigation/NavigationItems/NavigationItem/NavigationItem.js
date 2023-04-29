import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink as BaseNavLink } from "react-router-dom";

import './NavigationItem.css';

// activeClassName={classes.active}
//  exact={exact}
// to={link}

const NavigationItem = ({ children, link, exact }) => {
  return (
  <li className='NavigationItem'>
    <NavLink end  to={link}>
      {children}
    </NavLink>
  </li>
)};

NavigationItem.defaultProps = {
  exact: false,
};
NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  link: PropTypes.string.isRequired,
};
export default NavigationItem;
