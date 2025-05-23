import { useEffect } from 'react';
import './mouse.css'
const MouseMove = () => {
  useEffect(() => {
    const mouseTracker = document.getElementById("mouseBg");

    const handleMouseMove = (e) => {
      if (!mouseTracker) return;
      mouseTracker.style.left = `${e.clientX - 10}px`;
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
    <span
      className="hidden lg:block w-7 h-7 fixed pointer-events-none z-[9999] border-2 border-green-400 bg-green-200/10 rounded-full shadow-[0_0_20px_#4ade80] transition-transform duration-100 ease-out animate-pulse"
    ></span>
  );
};

export default MouseMove;