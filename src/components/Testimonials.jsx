import React from "react";
import Man from '../assets/man.png'
import Woman from '../assets/woman.png'
import Man2 from '../assets/man (1).png'

const Testimonials = () => (

  <div className="text-center py-10 text-white">
    <h5>Testimonials</h5>
    <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">See what others have to say</h1>
    <div className="flex max-w-5xl mx-auto gap-8 group">
      <div className="bg-white/10 group-hover:blur-sm hover:!blur-none  hover: !scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
        <img src={Man} alt="" className="h-20 mx-auto "/>
        <h4 className="uppercase text-x1 font-bold">Peter Smith</h4>
        <p className="text-sm leading-7 my-3 font-light opacity-50">
        "I was thoroughly impressed with the level of service I received from this supercar chauffeur business. The car was in pristine condition and the driver was knowledgeable about the area, making my ride smooth and enjoyable."
        </p>
        <button className="bg-btn_primary py-2.5 px-8 rounded-full">
          Get In Touch
        </button>
      </div>
      <div className="bg-white/10 group-hover:blur-sm hover:!blur-none  hover: !scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
        <img src={Woman} alt="" className="h-20 mx-auto "/>
        <h4 className="uppercase text-x1 font-bold">Hannah Stevens</h4>
        <p className="text-sm leading-7 my-3 font-light opacity-50">
        "I recently used Muap Chauffuers for a special occasion and it was truly amazing. The car was luxurious and the driver was professional and courteous. I highly recommend this service for anyone looking for an unforgettable experience."
        </p>
        <button className="bg-btn_primary py-2.5 px-8 rounded-full">
          Get In Touch
        </button>
      </div>
      <div className="bg-white/10 group-hover:blur-sm hover:!blur-none  hover: !scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
        <img src={Man2} alt="" className="h-20 mx-auto "/>
        <h4 className="uppercase text-x1 font-bold">Adam Hay</h4>
        <p className="text-sm leading-7 my-3 font-light opacity-50">
        "From start to finish, Muap chauffeurs service exceeded my expectations. The booking process was simple and straightforward, and the driver was prompt and polite. The car was a real head-turner and made my event truly special. I would definitely use this service again."
        </p>
        <button className="bg-btn_primary py-2.5 px-8 rounded-full">
          Get In Touch
        </button>
      </div>
    </div>
  </div>
);

export default Testimonials;

