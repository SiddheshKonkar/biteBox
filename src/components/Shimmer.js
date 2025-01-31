import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-auto w-[250px] animate-pulse">
      <div className="h-[200px] bg-gray-200 rounded-2xl"></div>
      <div className="p-4">
        <div className="h-6 my-2 w-full bg-gray-200 rounded-md"></div>
        <div className="h-6 my-2 w-full bg-gray-200 rounded-md"></div>
        <div className="h-6 my-2 w-full bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default Shimmer;
