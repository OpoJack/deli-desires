import React from "react";
import dd_header from "../../images/dd-header.png";

const Header = () => {
  return (
    <section>
      <div className='container p-3 mx-auto flex flex-col'>
        <div className='lg:w-5/6 mx-auto'>
          <div className='rounded-lg overflow-hidden align-top'>
            <img
              alt='Deli Desires Header with wolf'
              className='md:h-full md:w-full'
              src={dd_header}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
