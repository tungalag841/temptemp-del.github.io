import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./App";
import "./index.css"
import store from './store/index'
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProSidebarProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ProSidebarProvider>
);

