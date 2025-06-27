import { BiMenu } from 'react-icons/bi';


const TopBar = ({ onMenuClick }) => {
  return (
    <div className=" shadow px-4 py-3 flex items-center justify-between md:justify-end">
      {/* Mobile Menu Button */}
      <span className="md:hidden" onClick={onMenuClick}>
        <BiMenu className="w-6 h-6 " />
      </span>
      <h1 className="hidden md:block text-xl font-semibold ">Dashboard</h1>
    </div>
  );
};

export default TopBar;
