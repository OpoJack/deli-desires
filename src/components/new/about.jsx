import React from "react";

const aboutData = [
  { title: "Sandwiches", description: "Sensational!" },
  { title: "Bialys", description: "Fresh!" },
  { title: "Coffee", description: "Hot & Iced!" },
  { title: "Sandwiches", description: "Sensational!" },
  { title: "Sandwiches", description: "Sensational!" },
];

const About = () => {
  return (
    <div>
      <div className='content-center mb-2 text-center'>
        <span
          className='rounded-lg px-3 py-1               
                drop-shadow-sm w-1/2 text-center'
        >
          <span className='font-yellowtail text-3xl text-yellow-500 hover:text-yellow-400 transition duration-200 hover:scale-105 hover:rounded-lg lg:p-2 md:p-8 sm:p-7 sm:ml-0 w-fill'>
            <span className='drop-shadow-sm'>{`About us`}</span>
          </span>
        </span>
      </div>
      <div className='relative grid-rows-5'>
        {aboutData.map((item, index) => (
          <div className='grid grid-cols-5 md:grid-cols-3 text-sm' key={index}>
            <div className='text-right sm:text-center'>{item.title}</div>
            <div
              className='col-span-3 md:col-span-1 align-bottom 
              lg:px-2 md:px-4 sm:px-8
              sm:pl-4
              portrait:px-8 portrait:pr-2'
            >
              <div className='border-ddBlue-500 border-dotted border-b-2 h-1/2' />
            </div>
            <div className='text-left'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
