import React, { useState } from 'react';
import Toolbar from '../../../components/admin/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/admin/Navigation/SideDrawer/SideDrawer';
import Spinner from '../../../components/admin/UI/Spinner/Spinner';

import './Layout.css';

const AdminLayout = ({ children }) => {
  // const { data } = useGetAuthQuery({
  //   "token": localStorage.getItem('token')
  // });

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  let content;
  // END AJILLANA! TOKENGUI UYED LOOP UUSEED BAINA

  if (true) {
    content = (
      <div>
        <Toolbar
          isAuth={true}
          drawerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer
          isShown={sideDrawerIsVisible}
          closed={sideDrawerHandler}
          isAuth={true}
        />
        <main className='Content'>{children}</main>
      </div>
    )
  } else {
    content = (
      <Spinner />
    )
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default AdminLayout;
