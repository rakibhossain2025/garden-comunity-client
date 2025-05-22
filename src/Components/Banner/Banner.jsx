import React from 'react';
import Slider from 'react-slick';
import SingleBanner from './SingleBanner';

const Banner = ({ activeGardener }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: false
  };
  return (
    <>
      <Slider {...settings}>

        {activeGardener.map((trending) => (
          <SingleBanner trending={trending} />
        ))}

      </Slider>
    </>
  );
};

export default Banner;