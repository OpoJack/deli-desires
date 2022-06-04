import React from "react";
import dd_header from "../../images/dd-header.png";

const Header = () => {
  return (
    <section>
      <div className='container p-3 mx-auto flex flex-col'>
        <div className='lg:w-5/6 mx-auto'>
          <div className='rounded-lg overflow-hidden align-top'>
            <img
              alt='Deli Desires Header image with wolf'
              className='xl:h-80 lg:h-72 md:h-full w-full'
              src={dd_header}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
