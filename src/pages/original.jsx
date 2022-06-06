// import React from "react";
import Header from "../components/header/header";
import About from "../components/about/about";
import Menu from "../components/menu/menu";
import Order from "../components/order/order";
import Contact from "../components/contact/contact";
import SMedia from "../components/social-media/social-media";
import Footer from "../components/footer/footer";

const Original = () => {
  return (
    <div>
      <Header />
      <div className='px-5 font-tiro text-gray-600/80 '>
        <About />
        <Menu />
        <Order />
        <Contact />
        <SMedia />
        <Footer />
      </div>
    </div>
  );
};

export default Original;
