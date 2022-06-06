import React from "react";

const Contact = ({ title }) => {
  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container p-2 mx-auto'>
        <div className='flex flex-col text-center w-full mb-4'>
          <div className='content-center mb-2 text-center'>
            <span
              className='rounded-lg px-3 py-1               
                drop-shadow-sm w-1/2 text-center'
            >
              <span className='font-yellowtail text-3xl text-yellow-500 hover:text-yellow-400 transition duration-200 hover:scale-105 hover:rounded-lg lg:p-2 md:p-8 sm:p-7 sm:ml-0 w-fill'>
                <span className='drop-shadow-sm'>{`${title}`}</span>
              </span>
            </span>
          </div>
          <a href='tel:4072505333' className='text-black underline'>
            Call: 407-250-5333
          </a>
        </div>
        <div className='lg:w-1/2 md:w-2/3 sm:w-full mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className='leading-7 text-sm text-gray-600'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className='leading-7 text-sm text-gray-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className='leading-7 text-sm text-gray-600'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                ></textarea>
              </div>
            </div>
            <div className='p-2 w-full'>
              <button className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-yellow-300 transition rounded text-lg font-yellowtail'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
