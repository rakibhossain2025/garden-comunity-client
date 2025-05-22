import React from 'react';
import Slider from 'react-slick';
import SingleTrend from './SingleTrend';
const TrendingTips = ({ activeGardener }) => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (<div className='my-12 '>

    <Slider {...settings} >
      {activeGardener.map((trending) => (
        <SingleTrend trending={trending} />
      ))}
    </Slider>

  </div>);
};

export default TrendingTips;