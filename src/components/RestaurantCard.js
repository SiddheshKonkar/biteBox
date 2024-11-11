import React from "react";

const RestaurantCard = ({ name, imgID, cuisine, rating, location }) => {
  const imgURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-auto w-[250px]">
      <img
        src={imgURL + imgID}
        alt={name}
        className="w-full h-[200px] object-cover rounded-2xl"
      />
      <div className="p-4">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-gray-700">{cuisine.join(", ")}</div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-gray-500 ml-2">{rating}</span>
          <span className="text-gray-500 ml-2">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
