import React from "react";

const Map = () => {
  return (
    <div>
      <div className='content-center mb-2 text-center'>
        <span
          className='rounded-lg px-3 py-1               
                drop-shadow-sm w-1/2 text-center'
        >
          <a
            href='http://maps.google.com/maps?daddr=715%20Fern%20Creek%20Avenue%20Ste.%20B,%20Orlando,%20Florida%2032803,%20United%20States'
            className='font-yellowtail text-3xl text-yellow-500 hover:text-yellow-400 transition duration-200 hover:scale-105 hover:rounded-lg lg:p-2 md:p-8 sm:p-7 sm:ml-0 w-fill'
          >
            <span className='drop-shadow-sm'>{`Get Directions!`}</span>
          </a>
        </span>
        <p className='py-1 text-xs'>
          715 Fern Creek Avenue Ste. B, Orlando, Florida 32803, United States
        </p>
      </div>
      <section className='relative'>
        <div className='flex content-center inset-0'>
          <iframe
            // style={{ filter: " contrast(1) opacity(.7)" }}
            marginHeight='0'
            marginWidth='0'
            title='map'
            scrolling='no'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5298346376503!2d-81.36226548255617!3d28.55384850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b21b0ea700b%3A0x7010c47570c68f4e!2sDeli%20Desires!5e0!3m2!1sen!2sus!4v1654313674401!5m2!1sen!2sus'
            width='100%'
            height='50%'
            frameBorder='0'
            className='rounded-lg border-2 border-blue-500 drop-shadow-sm'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Map;
