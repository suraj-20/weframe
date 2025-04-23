import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Header = ({ heading }: { heading: String }) => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-2 shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <FaArrowLeftLong className="h-5 w-5 text-lg text-gray-800" />
        <h1 className="font-semibold text-gray-900 md:text-xl lg:text-2xl">
          {heading}
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center rounded-lg border bg-white px-2 py-1 shadow-sm xs:gap-4 md:gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          <img
            src="/images/avatar.avif"
            alt="User Avatar"
            className="h-8 w-8 rounded-lg object-cover"
          />
          <div className="text-left text-sm">
            <p className="text-xs text-gray-500">Welcome back.</p>
            <p className="font-medium text-gray-800">Akshita Patel</p>
          </div>
        </div>
        <IoIosArrowDown className="ml-2 h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
