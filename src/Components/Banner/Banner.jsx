import React from 'react';
import Slider from 'react-slick';
import SingleBanner from './SingleBanner';

const Banner = ({ activeGardener }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 1,
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