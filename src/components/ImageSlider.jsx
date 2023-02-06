import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import lambo1 from '../assets/lambo-1.jpeg'
import lambo2 from '../assets/lambo-2.jpeg'
import lambo3 from '../assets/lambo-3.jpeg'
import ferrari1 from '../assets/ferrari-1.jpeg'
import ferrari2 from '../assets/ferrari-2.jpeg'
import porsche1 from '../assets/porsche-1.jpeg'
import porsche2 from '../assets/porsche-2.jpeg'
import porsche3 from '../assets/porsche-3.jpeg'
import porsche4 from '../assets/porsche-4.jpeg'

const ImageSlider = () => {
  const slides = [
    {
      url: lambo1,
      title: 'Lamborghini-1',
    },
    {
      url: lambo2,
      title: 'Lamborghini-2',
    },
    {
      url: lambo3,
      title: 'Lamborghini-3',
    },
    {
      url: ferrari1,
      title: 'Ferrari-1',
    },
    {
      url: ferrari2,
      title: 'Ferrari-2',
    },
    {
      url: porsche1,
      title: 'Porsche-1',
    },
    {
      url: porsche2,
      title: 'FPorsche-2',
    },
    {
      url: porsche3,
      title: 'FPorsche-3',
    },
    {
      url: porsche4,
      title: 'FPorsche-4',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;