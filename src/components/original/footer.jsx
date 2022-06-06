import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className='container p-3 mx-auto lg:w-1/2 md:w-7/12 my-2 sm:w-10/12 '>
        <div className=' mx-auto '>
          <div className='rounded-lg overflow-hidden align-top transition text-center text-lg space-x-5 font-yellowtail'>
            <a href='https://github.com/OpoJack' className=''>
              <span> Page by Jack Oporto</span>
            </a>
            <Link to={"/new"}>Demo New Site!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
