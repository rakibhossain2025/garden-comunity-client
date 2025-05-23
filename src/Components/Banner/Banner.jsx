import React from 'react';
import Slider from 'react-slick';
import SingleBanner from './SingleBanner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = ({ loader }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="max-w-full overflow-x-hidden">
      <Slider {...settings}>

        {loader.map((trending) => (
          <SingleBanner trending={trending} />
        ))}

      </Slider>
    </div>
  );
};

export default Banner;