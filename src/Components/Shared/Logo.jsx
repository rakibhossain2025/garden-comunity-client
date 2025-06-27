import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to='/' className="cursor-pointer">
      <div className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/Jw8GM15S/sdaf.png"
          alt="logo not found"
          className="w-10 h-10"
        />
        <span className="text-2xl font-bold">GardenHive</span>
      </div>
    </Link>
  );
};

export default Logo;