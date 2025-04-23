import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

const SubHeader = () => {
  return (
    <div
      className="flex items-center justify-end px-6 py-4 bg-white shadow-sm md:flex-row md:gap-6"
      style={{
        margin: "20px",
        padding: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "6px",
        gap: "60px",
      }}
    >
      {/* Left: Search bar + buttons */}
      <div className="flex items-center gap-3" style={{ gap: "20px" }}>
        {/* Search bar */}
        <div
          className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-200 px-4 py-2 text-sm text-gray-600 w-72"
          style={{
            borderColor: "#E5E7EB",
            padding: "8px 10px",
            borderRadius: "8px",
            gap: "5px",
          }}
        >
          <IoIosSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
            style={{ border: "none" }}
          />
        </div>

        {/* Calendar Button */}
        <button
          className="p-2 bg-[#f1f2f6] rounded-md hover:bg-gray-200 transition"
          style={{
            padding: "8px 10px",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <FaCalendarAlt />

          {/* <Calendar style={{ color: "#1C1442" }} /> */}
        </button>

        {/* Filter Button */}
        <button
          className="p-2 bg-[#f1f2f6] rounded-md hover:bg-gray-200 transition"
          style={{
            padding: "8px 10px",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <IoFilter />

          {/* <Filter style={{ color: "#1C1442" }} /> */}
        </button>
      </div>

      {/* Right: Add Story */}
      <button
        className="text-white px-5 py-2 rounded-md font-medium text-sm transition"
        style={{
          backgroundColor: "#1C1442",
          color: "#fff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        Add New Story
      </button>
    </div>
  );
};

export default SubHeader;

// import { IoIosSearch } from "react-icons/io";
// import { FaCalendarAlt } from "react-icons/fa";
// import { IoFilter } from "react-icons/io5";

// const SubHeader = () => {
//   return (
//     <div
//       className="flex md:flex-col flex-row items-center justify-between px-4 py-4 bg-white shadow-md m-5 rounded-lg gap-4 md:gap-6"
//       style={{
//         margin: "20px",
//         padding: "10px",
//         boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//         borderRadius: "6px",
//         // gap: "60px",
//       }}
//     >
//       {/* Left: Search bar + buttons */}
//       <div
//         className="flex items-center gap-3 w-full md:w-auto"
//         style={{ gap: "20px" }}
//       >
//         {/* Search bar */}
//         <div
//           className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-600 rounded-lg w-full md:w-72"
//           style={{
//             borderColor: "#E5E7EB",
//             padding: "8px 10px",
//             borderRadius: "8px",
//             gap: "5px",
//           }}
//         >
//           <IoIosSearch className="text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
//             style={{ border: "none" }}
//           />
//         </div>

//         {/* Calendar Button */}
//         <button
//           className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
//           style={{
//             padding: "8px 10px",
//             border: "none",
//             borderRadius: "8px",
//             fontSize: "14px",
//           }}
//         >
//           <FaCalendarAlt className="text-gray-700" />
//         </button>

//         {/* Filter Button */}
//         <button
//           className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
//           style={{
//             padding: "8px 10px",
//             border: "none",
//             borderRadius: "8px",
//             fontSize: "14px",
//           }}
//         >
//           <IoFilter className="text-gray-700" />
//         </button>
//       </div>

//       {/* Right: Add Story */}
//       <button
//         className="bg-indigo-900 text-white px-5 py-2 rounded-md font-medium text-sm transition w-full md:w-auto"
//         style={{
//           backgroundColor: "#1C1442",
//           color: "#fff",
//           padding: "12px 24px",
//           border: "none",
//           borderRadius: "8px",
//           fontSize: "14px",
//         }}
//       >
//         Add New Story
//       </button>
//     </div>
//   );
// };

// export default SubHeader;
