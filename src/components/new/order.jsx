import React from "react";

const Order = ({ title }) => {
  return (
    <div>
      <div className='content-center mb-2 text-center'>
        <span
          className='rounded-lg px-3 py-1               
                drop-shadow-sm w-1/2 text-center'
        >
          <a
            href='http://deli-desires.smartonlineorder.com/'
            className='font-yellowtail text-3xl text-yellow-500 hover:text-yellow-400 transition duration-200 hover:scale-105 hover:rounded-lg lg:p-2 md:p-8 sm:p-7 sm:ml-0 w-fill'
          >
            <span className='drop-shadow-sm'>{`${title}`}</span>
          </a>
        </span>
        <p className='leading-relaxed text-base text-center'>⤴7am-3pm⤴</p>
      </div>
    </div>
  );
};

export default Order;
