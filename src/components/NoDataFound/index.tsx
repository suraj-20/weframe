import React from "react";

const NoDataFound = ({ content }: { content: String }) => {
  return (
    <div className="flex flex-col justify-center" style={{ margin: "20px" }}>
      <h1 className="text-2xl font-bold text-gray-800">{content}</h1>
      {/* <p className="text-gray-600">
        Please check your filters or try again later.
      </p> */}
    </div>
  );
};

export default NoDataFound;
