import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import menu1 from "../../images/dd-menu.png";
import menu2 from "../../images/dd-menu2.png";

const images = [
  {
    url: "https://images.yswcdn.com/-6709878151531560371-ql-90/451/454/aah/chefknivestogo/doi-san-sakai-takayuki-genbu-deba-180mm-4.png",
  },
  { url: "../../images/dd-menu2.png" },
];

const Menu = () => {
  return (
    <section>
      <div className='container px-3 mt-3 mx-auto lg:w-1/2 md:w-7/12 my-2 '>
        <div className=' mx-auto'>
          <div className='rounded-lg overflow-hidden align-top transition text-center xl:text-xl lg:text-lg md:text-base'>
            <h1>Current Menu</h1>
            <a
              href='https://img1.wsimg.com/blobby/go/810cf8ff-cf4a-4605-ba00-c6974fb7e012/Scanned%20Documents%202.pdf'
              className='text-ddGold-500 text-sm hover:text-yellow-700 transition duration-200'
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <div className='container py-5 mx-auto lg:w-8/12 md:w-7/12 my-2 border-b-ddBlue-500 border-b-4 border-dotted'>
        <div className=' mx-auto'>
          <div className='rounded-lg overflow-hidden align-top transition text-center xl:text-xl lg:text-lg md:text-base border-2'>
            <AliceCarousel
              autoPlay={false}
              animationDuration={200}
              touchTracking={true}
              disableButtonsControls={true}
            >
              <img src={menu1} className='sliderimg' />
              <img src={menu2} className='sliderimg' />
            </AliceCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
