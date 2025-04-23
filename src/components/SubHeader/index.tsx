import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

const SubHeader = () => {
  return (
    <div className="m-5 flex items-center justify-end rounded-lg bg-white p-2 shadow-lg xs:flex-col xs:gap-3 sm:flex-row md:gap-6 lg:gap-10">
      {/* Left: Search bar + buttons */}
      <div className="sx:w-96 flex items-center gap-3">
        {/* Search bar */}
        <div className="sm:w-50 flex items-center gap-2 rounded-lg border border-gray-200 bg-[#f8f9fb] px-4 py-2 text-sm text-gray-600 md:w-72">
          <IoIosSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm placeholder-gray-400 outline-none"
          />
        </div>

        {/* Calendar Button */}
        <button className="rounded-md bg-[#f1f2f6] p-3 transition hover:bg-gray-200">
          <FaCalendarAlt />
          <span className="hidden">Calendar</span>
        </button>

        {/* Filter Button */}
        <button className="rounded-md bg-[#f1f2f6] p-3 transition hover:bg-gray-200">
          <IoFilter />
          <span className="hidden">Filter</span>
        </button>
      </div>

      {/* Right: Add Story */}
      <button className="rounded-md bg-[#1C1442] text-xs font-medium text-white transition xs:p-3 sm:p-3 md:p-3 md:px-6 ">
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
