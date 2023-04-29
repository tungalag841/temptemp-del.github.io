import PropTypes from 'prop-types';
import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuthenticated }) => {
  const logout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("expirationDate")
    localStorage.removeItem("userId")
    window.location.replace('/admin/auth')
  }
  return (
  <ul className='NavigationItems'>
    {isAuthenticated ? (
      <NavigationItem link="/admin/newseditor">Админ</NavigationItem>
    ) : null}
    {isAuthenticated ? (
      <button className='NavigationItem logout-btn' onClick={()=>logout()}>Гарах</button>
      // <NavigationItem link="/logout">Гарах</NavigationItem>
    ) : null}
  </ul>
)};

navigationItems.propTypes = {
  /*
   * bool showing if the user is logged in or not
   */
  isAuthenticated: PropTypes.bool.isRequired,
};

export default navigationItems;
