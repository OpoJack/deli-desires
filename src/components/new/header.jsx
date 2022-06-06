import React from "react";
import dd_header from "../../images/dd-header.png";
const Header = () => {
  return (
    <div className='flex flex-wrap w-full mb-5 flex-col items-center text-center justify-center'>
      <img
        alt='Deli Desires Header with wolf'
        className='lg:w-5/12'
        src={dd_header}
      />
    </div>
  );
};

export default Header;
