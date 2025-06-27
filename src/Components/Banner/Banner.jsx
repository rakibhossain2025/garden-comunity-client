import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router';

const Banner = () => {

  const settings = {
    dots: false,
    infinite: true, adaptiveHeight: true,
    speed: 2000,
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
      image: "https://static.vecteezy.com/system/resources/thumbnails/018/746/497/small/colorful-welcome-sign-over-red-black-background-modern-trend-design-night-bright-advertising-art-banner-vector.jpg"
    },
    {
      title: "Find Local Gardeners",
      description: "Connect with nearby gardening enthusiasts, mentors, and plant lovers in your area.",
      image: "https://i.ibb.co/d0mPYtqr/photo-1686769931272-cd86a07098dc.jpg"
    },
    {
      title: "Join Gardening Events",
      description: "Attend or host workshops, plant swaps, compost drives, and community clean-ups.",
      image: "https://i.ibb.co/DPhPkdmX/sdfghfdsa.webp"
    },
    {
      title: "Learn and Share Plant Care",
      description: "From balcony herbs to hydroponic setups – discover tips and tricks for thriving plants.",
      image: "https://i.ibb.co/mFdqhtvY/seedling2.jpg"
    }
  ];

  return (
    <div className="w-full max-h-[1400px] overflow-x-hidden">
      <Slider {...settings}>

        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="dark:text-white text-[#52F757] flex max-h-[1400px] h-[75vh] flex-col justify-center items-start p-8"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${slide.image}')`,
                minHeight: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h2
                className="text-4xl font-bold mb-4">
                <Typewriter
                  words={[`${slide.title}`]}
                  loop={true}
                  cursor
                  cursorStyle=":)"
                  typeSpeed={100}
                  deleteSpeed={20}
                />
              </h2>
              <p className="mb-6">{slide.description}</p>
              <Link to='/explore-gardeners'>
              <button                >
                Explore Event
              </button>
                </Link>
            </div>
          </div>

        ))
        }
      </Slider >
    </div >
  );
};

export default Banner;
