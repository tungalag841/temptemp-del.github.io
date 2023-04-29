import React from "react";
import { Link } from "react-router-dom";

// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SubMenu,
//   SidebarHeader,
//   SidebarContent,
//   SidebarFooter
// } from "react-pro-sidebar";

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { FaFileAlt, FaEdit,
  FaGem, FaList, FaGithub } from "react-icons/fa";

import './Aside.css'

export default function Aside() {
  const headerStyle = {
    padding: "1.5rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
  };
  // window.location.reload();
  return (
    <React.Fragment>
    {/* <ProSidebar className="Content"> */}
      {/* <SidebarContent> */}
      <aside className="menu-side">
        <div className="side__menu">
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
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="With Suffix"
          >
            <div> 1 </div>
            <div> 2 </div>
            <div> 3 </div>
          </SubMenu>
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
  );
}
