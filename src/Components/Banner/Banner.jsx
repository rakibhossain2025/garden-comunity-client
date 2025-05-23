import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from 'sweetalert2';

const Banner = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const slides = [
    {
      title: "Welcome to GreenConnect",
      description: "Your ultimate gardening community – share tips, ask questions, and grow together!",
      image: "https://i.ibb.co/PzbMNhrq/premium-photo-1665657351340-f5088ce0e062.jpg"
    },
    {
      title: "Find Local Gardeners",
      description: "Connect with nearby gardening enthusiasts, mentors, and plant lovers in your area.",
      image: "https://i.ibb.co/d0mPYtqr/photo-1686769931272-cd86a07098dc.jpg"
    },
    {
      title: "Join Gardening Events",
      description: "Attend or host workshops, plant swaps, compost drives, and community clean-ups.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Learn & Share Plant Care",
      description: "From balcony herbs to hydroponic setups – discover tips and tricks for thriving plants.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const alertFunction = () => {

    Swal.fire({
      icon: "warning",
      title: "We are Sorry",
      showConfirmButton: false,
      timer: 1000
    })
  }
  return (
    <div className="max-w-full overflow-x-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[500px]">
            <div
              className="w-full h-full bg-cover bg-center text-white flex flex-col justify-center items-start p-8"
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${slide.image}')` }}
            >
              <h2 className="text-4xl text-black font-bold mb-4">{slide.title}</h2>
              <p className="mb-6">{slide.description}</p>
              <button onClick={alertFunction} className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded">Explore Event</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
