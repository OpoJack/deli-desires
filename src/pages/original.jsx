// import React from "react";
import Header from "../components/original/header";
import About from "../components/original/about";
import Menu from "../components/original/menu";
import Order from "../components/original/order";
import Contact from "../components/original/contact";
import SMedia from "../components/original/social-media";
import Footer from "../components/original/footer";

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
