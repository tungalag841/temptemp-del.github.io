import React, { useState } from "react";
import Head from "../../../components/frontEnd/head/Head";
import Toolbar from "../../../components/frontEnd/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../../components/frontEnd/Navigation/SideDrawer/SideDrawer";
import Logo from "../../../components/frontEnd/assets/logo.png";
import { useGetBannersQuery,useGetBannerAllQuery } from "../../../store/frontEndApiSlice";

import "./layout.css";

const Layout = ({ children}) => {

  const [values, setValues] = useState(
    {
      showSideDrawer: false,
      a: "2",
      isLoading: false,
      banner: "",
    }
  );
  const { data, isSuccess } = useGetBannersQuery('A')
  const {data: getBannerAll, isSuccess: bannerAllIsSuccess} = useGetBannerAllQuery()


  const sideDrawerClosedHandler = () => {
    setValues({ showSideDrawer: false });
  };

  const sideDrawerToggleHandler = () => {
    setValues((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });

  };
  return (
    <div className="layout">
      <header className="headerContent">
        <Head />
        <div className="secondHead">
          <div className="secondHead__container">
            <div className="secondHead__logo">
              <figure className="secondHead__logo-figure">
                <a href="/">
                  <img
                    className="secondHead__logo-img"
                    src={Logo}
                    alt="Logo"
                  />
                </a>
              </figure>
            </div>
            {
              bannerAllIsSuccess
                ? <div className="secondHead__banner-figure"><img className="secondHead__banner-img" src={getBannerAll.bannerA[0].image} /></div>
                : <center> <h1>A-Banner620X90</h1> </center>
            }
          </div>
        </div>

        <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>

        <SideDrawer
          open={values.showSideDrawer}
          closed1={sideDrawerClosedHandler}
          hide={sideDrawerToggleHandler}
        />
      </header>
      
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;