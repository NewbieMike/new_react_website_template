import React from "react";
import PropTypes from "prop-types";

import { CookieBar } from "../cookieBar/cookieBar";
import { Header } from "../Header/Header";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import Footer from "../Footer/Footer";

const Component = ({ children }) => (
  <div className="root">
    <Header />
    <HeaderMobile />
    {children}
    <CookieBar />
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MainLayout, Component as MainLayoutComponent };
