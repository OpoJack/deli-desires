import React from "react";
import orderNow from "../../images/dd-order-online.png";

const Order = () => {
  return (
    <section>
      <div className='container py-8 mx-auto lg:w-3/5 '>
        <div className=' mx-auto'>
          <div className='rounded-lg overflow-hidden  text-center'>
            <a href='http://deli-desires.smartonlineorder.com/'>
              <img src={orderNow} alt='Order now!' />
            </a>
            <p className='py-5 md:text-lg'>
              For Pre-Orders & Online Ordering Please Click the image above :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
