import React from "react";
import orderNow from "../../images/dd-order-online.png";

const Order = () => {
  return (
    <section>
      <div className='container py-8 mx-auto lg:w-3/5 '>
        <div className=' mx-auto'>
          <div className='rounded-lg overflow-hidden  text-center'>
            <a href='https://img1.wsimg.com/isteam/ip/810cf8ff-cf4a-4605-ba00-c6974fb7e012/D77595AC-AEBA-49DE-996A-2B4197239FCA.jpeg/:/cr=t:20.85%25,l:0%25,w:100%25,h:50%25/rs=w:1240,h:620,cg:true'>
              <img src={orderNow} alt='Order now!' />
            </a>
            <p className='py-5 text-lg'>
              For Pre-Orders & Online Ordering Please Click the image above :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
