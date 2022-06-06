import React from "react";
import Header from "../components/new/header";
import About from "../components/new/about";
import Map from "../components/new/map";
import Order from "../components/new/order";
import Menu from "../components/new/menu";
import SMedia from "../components/new/social-media";

const New = () => {
  return (
    <section className='text-gray-600 '>
      <div className='container px-5 py-5 mx-auto'>
        <Header />
        <div className='flex flex-wrap -m-4 order'>
          <About />
          <Map />
          <Order />
          <Menu />
          <SMedia />
          <div className='xl:w-1/2 md:w-1/2 p-4 md:order-5 sm:order-6'>
            <div className='  p-6 rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
