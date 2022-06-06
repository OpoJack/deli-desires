import React from "react";

// Consider google forms embed for contact form
const Contact = () => {
  return (
    <section>
      <div className='container py-8 mx-auto  lg:w-3/5 '>
        <div className=' mx-auto'>
          <div className=' overflow-hidden  text-center'>
            <section className='relative'>
              <div className='flex content-center absolute inset-0'>
                <div
                  className=' flex absolute rounded-lg 
                bg-gradient-to-r from-blue-400 to-ddBlue-500 hover:bg-blue-500 bg-ddBlue-500 
                mt-2 ml-2 drop-shadow-lg '
                >
                  <a
                    href='http://maps.google.com/maps?daddr=715%20Fern%20Creek%20Avenue%20Ste.%20B,%20Orlando,%20Florida%2032803,%20United%20States'
                    className='font-yellowtail text-5xl text-white hover:text-yellow-300 transition duration-200 hover:scale-105 hover:rounded-lg lg:p-9 md:p-8 sm:p-7 sm:ml-0 '
                  >
                    <span className='drop-shadow-md'>{"Get Directions! "}</span>
                  </a>
                </div>
                <iframe
                  // style={{ filter: " contrast(1) opacity(.7)" }}
                  marginheight='0'
                  marginwidth='0'
                  title='map'
                  scrolling='no'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5298346376503!2d-81.36226548255617!3d28.55384850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b21b0ea700b%3A0x7010c47570c68f4e!2sDeli%20Desires!5e0!3m2!1sen!2sus!4v1654313674401!5m2!1sen!2sus'
                  width='100%'
                  height='100%'
                  frameborder='0'
                ></iframe>
              </div>
              <div className='container px-5 py-24 mx-auto flex'>
                <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md text-left'>
                  <h2 className='text-gray-900 text-2xl mb-1 font-medium'>
                    Drop us a line!
                  </h2>
                  <p className='leading-relaxed mb-2 text-gray-600'>
                    Better yet, see us in person 👋
                  </p>
                  <p className='py-1'>
                    715 Fern Creek Avenue Ste. B, Orlando, Florida 32803, United
                    States
                  </p>
                  <a href='tel:4072505333' className='text-black underline'>
                    407-250-5333
                  </a>
                  <div className='relative mb-4'>
                    <label
                      for='name'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Name
                    </label>
                    <input
                      type='name'
                      id='name'
                      name='name'
                      className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <label
                      for='email'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                  <div className='relative mb-4'>
                    <label
                      for='message'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>
                  <button className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-yellow-300 transition rounded text-lg font-yellowtail'>
                    Send
                  </button>
                  <p className='text-xs text-gray-500 mt-3'>
                    Have a great day!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
