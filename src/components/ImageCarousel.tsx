// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500, // Adjust the speed (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 500, // Set the autoplay speed (in milliseconds)
  };

  return (  
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img src="/src/assets/carousel/slide1.jpeg" alt="Image 1" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide2.jpeg" alt="Image 2" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide3.jpeg" alt="Image 3" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide4.jpeg" alt="Image 4" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide5.jpeg" alt="Image 5" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide6.jpeg" alt="Image 6" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide7.jpeg" alt="Image 7" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide8.jpeg" alt="Image 8" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide9.jpeg" alt="Image 9" className="w-full" />
        </div>
        <div>
          <img src="/src/assets/carousel/slide10.jpeg" alt="Image 10" className="w-full" />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      {/* Styles for shifting the dots */}
      <style>
        {`
          .slick-dots {
            position: absolute;
            right: 10px; /* Adjust the right distance as needed */
            bottom: 10px; /* Adjust the bottom distance as needed */
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;

