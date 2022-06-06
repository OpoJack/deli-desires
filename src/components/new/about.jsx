import React from "react";

const aboutData = [
  { title: "Sandwiches", description: "Sensational!" },
  { title: "Bialys", description: "Fresh!" },
  { title: "Coffee", description: "Wake up!" },
  { title: "Sandwiches", description: "Sensational!" },
  { title: "Sandwiches", description: "Sensational!" },
];

const About = () => {
  return (
    <div>
      <h2 className='text-ddGold-500 font-medium mb-2 text-center text-2xl'>
        About us
      </h2>
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
