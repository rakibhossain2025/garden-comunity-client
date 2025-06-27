import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingTips = ({ loader }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      
      <div className="overflow-hidden w-full">
        <Slider {...settings}>
          {loader.map((tip, index) => (
            <div key={index} className="px-3 w-full">
              <div className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white border border-green-200 dark:border-green-600 p-5 rounded-xl shadow hover:shadow-lg transition duration-300 h-full flex flex-col justify-between text-center">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300 mb-2">Tips by {tip.UserName}</h3>
                <p className="text-sm italic">{tip.tips}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingTips;