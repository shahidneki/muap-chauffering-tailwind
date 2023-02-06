import React from 'react';

const Plan = () => {
  return (
    <div className='h-screen w-full'>
          <div className='w-full m-auto px-20 py-12 flex flex-wrap justify-between span-proximity bg-white/10'>
      <p className='text-lg font-bold text-yellow-50 mx-4'>Weddings</p>
      <p className='text-lg font-bold text-yellow-50 mx-4'>|</p>
      <p className='text-lg font-bold text-yellow-50 mx-4'>Proms</p>
      <p className='text-lg font-bold text-yellow-50 mx-4'>|</p>
      <p className='text-lg font-bold text-yellow-50 mx-4'>Formal Events</p>
      <p className='text-lg font-bold text-yellow-50 mx-4'>|</p>
      <p className='text-lg font-bold text-yellow-50 mx-4'>Luxury Travel</p>
    </div>
      <div className='flex flex-col h-full justify-center text-cyan-50 pt-10 pl-10 pr-10'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Special Event</h3>
        <p className='text-2xl py-6'>
          Why would you settle for anything less?
        </p>
        <p className='pb-6 text-justify' >
        At MUAP Chauffuers, we understand that your special event is just that - special. That's why we provide top-notch chauffeuring services for all your supercar needs. Whether it's a wedding, prom, or a special night out on the town, we have the perfect car to make your event unforgettable. Our team of experienced drivers will ensure a smooth and safe ride, while you sit back and enjoy the luxury of your chosen vehicle. Let us take care of the transportation, so you can focus on making memories that will last a lifetime. Contact us today to plan your special event and elevate your experience with a touch of sophistication and class.
        </p>
        <div>
          <button className='bg-white text-black hover:bg-yellow-50/20 hover:text-white mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-white text-black hover:bg-yellow-50/20 hover:text-white hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
      </div>

  );
};

export default Plan;