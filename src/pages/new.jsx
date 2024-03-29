import React from "react";
import Header from "../components/new/header";
import About from "../components/new/about";
import Map from "../components/new/map";
import Order from "../components/new/order";
import Menu from "../components/new/menu";
import SMedia from "../components/new/social-media";
import Contact from "../components/new/contact";

const navigation = [
  { title: "About us", component: About, order: "md:order-1 sm:order-2" },
  { title: "Get Directions!", component: Map, order: "md:order-3 sm:order-4" },
  { title: "Order Online", component: Order, order: "md:order-2 sm:order-1" },
  { title: "Menu", component: Menu, order: "md:order-4 sm:order-3" },
  { title: "Social Media", component: SMedia, order: "md:order-6 sm:order-5" },
  {
    title: "Drop us a line 👋",
    component: Contact,
    order: "md:order-5 sm:order-6",
  },
];

const New = () => {
  return (
    <section className='text-gray-600 '>
      <div className='container px-5 py-2 mx-auto'>
        <Header />
        <div className='flex flex-wrap -m-4'>
          {navigation.map((item, index) => (
            <div
              className={`xl:w-1/2 md:w-1/2 p-2 sm:w-full ${item.order}`}
              key={index}
            >
              <div className=' p-2 rounded-lg'>
                <item.component title={item.title} />
              </div>
            </div>
          ))}
          {/* Dummy block */}
          {/* <div className='xl:w-1/2 md:w-1/2 p-2 md:order-5 sm:order-6'>
            <div className='  p-2 rounded-lg'></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default New;
