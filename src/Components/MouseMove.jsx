import { useEffect } from 'react';
import './mouse.css'
const MouseMove = () => {
  useEffect(() => {
    const mouseTracker = document.getElementById("mouseBg");

    const handleMouseMove = (e) => {
      if (!mouseTracker) return;
      mouseTracker.style.left = `${e.clientX + 5}px`;
      mouseTracker.style.top = `${e.clientY - 10}px`;
    };

    const handleClick = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple-effect lg:block hidden";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 200);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <span className='w-4 h-4 rounded-sm border hidden lg:flex border-red-500 bg-transparent fixed animate-spin' id='mouseBg'></span>
  );
};

export default MouseMove;