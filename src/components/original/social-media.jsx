import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const SMedia = () => {
  return (
    <section>
      <div className='container p-3 mx-auto lg:w-1/2 md:w-7/12 my-2 sm:w-10/12 border-b-ddBlue-500 border-b-4 border-dotted'>
        <div className=' mx-auto '>
          <div className='rounded-lg overflow-hidden align-top transition text-center xl:text-xl lg:text-lg md:text-base'>
            <h1 className='text-2xl font-yellowtail'>
              Check us out on social media!
            </h1>
            <div className='flex flex-wrap justify-center space-x-6'>
              <a href='https://www.facebook.com/delidesires/'>
                <FaFacebookF />
              </a>
              <a href='https://www.instagram.com/delidesires/'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMedia;
