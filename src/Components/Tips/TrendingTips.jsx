import React from 'react';
import Slider from 'react-slick';
import SingleTrend from './SingleTrend';
const TrendingTips = ({ loader }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
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
  return (<div className='my-12 max-w-full overflow-x-hidden'>

    <Slider {...settings} >
      {loader.map((trending) => (
        <SingleTrend trending={trending} />
      ))}
    </Slider>

  </div>);
};

export default TrendingTips;