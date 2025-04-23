import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Header = ({ heading }: { heading: String }) => {
  return (
    <div
      className="flex justify-between items-center px-6 py-4 bg-white shadow-sm"
      style={{
        height: "60px",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
        padding: "0px 30px",
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Left Side */}
      <div className="flex items-center gap-2" style={{ gap: "10px" }}>
        <FaArrowLeftLong
          className="w-5 h-5 text-gray-800"
          style={{ fontSize: "16px" }}
        />
        <h1
          className="text-lg font-semibold text-gray-900"
          style={{ fontSize: "25px" }}
        >
          {heading}
        </h1>
      </div>

      {/* Right Side */}
      <div
        className="flex items-center gap-2 border rounded-xl px-4 py-2 bg-white shadow-sm"
        style={{
          padding: "6px 10px",
          gap: "3rem",
          borderRadius: "8px",
          borderColor: "#E5E7EB",
        }}
      >
        <div className="flex items-center gap-2" style={{ gap: "10px" }}>
          <img
            src="/images/avatar.png"
            alt="User Avatar"
            className="rounded"
            style={{ borderRadius: "10px" }}
            width={30}
          />
          <div className="text-left text-sm">
            <p className="text-xs text-gray-400" style={{ fontSize: "8px" }}>
              Welcome back.
            </p>
            <p
              className="font-medium text-gray-800"
              style={{ fontSize: "14px" }}
            >
              Akshita Patel
            </p>
          </div>
        </div>
        <IoIosArrowDown
          className="w-4 h-4 text-gray-500 ml-2"
          style={{ fontSize: "14px" }}
        />
      </div>
    </div>
  );
};

export default Header;
