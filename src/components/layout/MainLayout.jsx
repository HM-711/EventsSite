import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const mainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default mainLayout;
