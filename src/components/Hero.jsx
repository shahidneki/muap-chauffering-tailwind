import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen -z-10'>
      <div className='relative top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='max-w-1100px mx-auto relative p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl pb-2 -z-11 '>
            The UK's most luxurious chauffuering service
          </h1>
          <button className='bg-white text-black hover:bg-yellow-50/20 hover:text-white'>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
