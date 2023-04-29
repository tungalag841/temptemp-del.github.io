import React, { Suspense } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useGetAuthQuery } from './store/authSlice';

import Layout from "./hoc/frontEnd/Layout/Layout";
import Home from "./page/frontEndPages/Home";
import Detail from "./page/frontEndPages/Detail";
import List from "./page/frontEndPages/List";
// import Video from "./page/frontEndPages/Video.js";
import Search from "./page/frontEndPages/Search";
import Footer from "./components/frontEnd/footer/Footer";
import AdminLayout from "./hoc/admin/Layout/Layout";
import Spinner from '../src/components/admin/UI/Spinner/Spinner';
const Admin = React.lazy(() => {
  return import('../src/page/adminPages/Admin/Admin');
});
const Auth = React.lazy(() => {
  return import('../src/page/adminPages/Auth/Auth');
});

const App = () => {
  const { data } = useGetAuthQuery();

  let routes = (
    <Routes>
      <Route path={`/*`} exact element={<Auth />} />
    </Routes>
  );

  if (data?.authenticated === true) {
    routes = (
      <Routes>
        <Route path="/admin/newsadd" element={<Admin />} />
        <Route path="/admin/newsedit/:id" element={<Admin />} />
        <Route path="/admin/newslist" element={<Admin />} />

        <Route path="/admin/videoadd" element={<Admin />} />
        <Route path="/admin/videoedit/:id" element={<Admin />} />
        <Route path="/admin/videolist" element={<Admin />} />

        <Route path="/admin/banneradd" element={<Admin />} />
        <Route path="/admin/banneredit/:id" element={<Admin />} />
        <Route path="/admin/bannerlist" element={<Admin />} />

        <Route path="/*" element={<Navigate to="/admin/newsadd" />} />
      </Routes>
    );
  }

  let frontroutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/category/:id" element={<List />} />
      {/* <Route path="/video" element={<Video />} /> */}
      <Route path="/search/:id" element={<Search />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
  return (
    <div>
      {window.location.pathname.split('/')[1] === 'admin' ?
        <AdminLayout>
          <Suspense fallback={<Spinner />}>
            {routes}
          </Suspense>
        </AdminLayout>
        : (<>
        <Layout >
            {frontroutes}
          </Layout>
          <Footer />
          </>)}
    </div>
  )
}
export default App;
