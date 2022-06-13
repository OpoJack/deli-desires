import React from "react";

const aboutData = [
  { title: "Bialys", description: "Made Fresh!" },
  { title: "Sandwiches", description: "Sensational!" },
  { title: "Coffee", description: "Hot and Iced!" },
  { title: "Cream Cheeses", description: "Variety's the spice!" },
  { title: "Specials", description: "Get em while they're hot!!" },
  { title: "Deli Salads", description: "Classics!" },
];

const About = ({ title }) => {
  return (
    <div>
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
      <div className='relative grid-rows-5 border-2'>
        {aboutData.map((item, index) => (
          <div
            className='grid grid-cols-5 md:grid-cols-3 text-sm even:bg-slate-50
          odd:border-y-2 first:border-t-2
            border-gray-200 odd:bg-blue-100'
            key={index}
          >
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
