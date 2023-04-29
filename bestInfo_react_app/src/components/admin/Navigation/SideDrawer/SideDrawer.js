import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";

import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useGetAuthQuery } from '../../../../store/authSlice';
import { FaFileAlt, FaEdit,
  FaGem, FaList, FaGithub } from "react-icons/fa";
const SideDrawer = ({ closed, isShown, isAuth }) => {
  const attachedClasses = ['SideDrawer', 'Close'];
  if (isShown) {
    attachedClasses.splice(1, 1, 'Open');
  }
  const { data } = useGetAuthQuery();

  return (
    <>
   {data?.authenticated ? <> <Backdrop show={isShown} clicked={closed} />
    <div
      className={attachedClasses.join(' ')}
      onKeyDown={closed}
      role="button"
      tabIndex={0}
      onClick={closed}
    >
      <div className='Logo'>
        <Logo />
      </div>

      <nav>
        <React.Fragment>
  {/* <ProSidebar className="Content"> */}
    {/* <SidebarContent> */}
    <aside className="menu-side">
      <div className="side__menu1">
      <div className='side__menu-item'>
        <div className='icon__circle'>
        <FaFileAlt color="white"/>
        </div>
      <Link 
      to="/admin/newsadd" 
      onClick={()=>{window.location.replace("/admin/newsadd");}}>Мэдээ оруулах</Link>
      </div>
      <div className='side__menu-item'>
        <div className='icon__circle'>
      <FaEdit color="white"/>

        </div>
      <Link to="/admin/newslist">Мэдээ засах</Link>
        </div>
        <div className='side__menu-item' >
        <div className='icon__circle'>
        <FaList color="white"/>
        </div>
          <Link 
          to="/admin/videoadd" 
          onClick={()=>{window.location.replace("/admin/videoadd");}}>Видео оруулах</Link>
          </div>
        <div className='side__menu-item' >
          <div className='icon__circle'>
        <FaGem color="white"/>

          </div>
          <Link to="/admin/videolist">Видео засах</Link>
          </div>
        <div className='side__menu-item'>
        <div className='icon__circle'>
        <FaList color="white"/>
        </div>
          <Link to="/admin/banneradd" onClick={()=>{window.location.replace("/admin/banneradd");}}>Баннер оруулах</Link>
        </div>
        <div className='side__menu-item' >
          <div className='icon__circle'>
        <FaGem color="white"/>

          </div>
          <Link to="/admin/bannerlist">Баннер засах</Link>
        </div>
        <Menu>
        
      </Menu>
      </div>
      
    {/* </SidebarContent> */}
      </ aside>
    {/* <SidebarFooter style={{ textAlign: "center" }}>
      <div className="sidebar-btn-wrapper">
      </div>
    </SidebarFooter> */}
    {/* </ProSidebar> */}
  </React.Fragment>
  <NavigationItems isAuthenticated={isAuth} />

      </nav>
    </div></> : null}
    
  </>
  );
};

SideDrawer.propTypes = {
  closed: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
export default SideDrawer;
