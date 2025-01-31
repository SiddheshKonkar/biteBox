import React from "react";

const RestaurantCard = ({
  name,
  imgID,
  cuisine,
  rating,
  location,
  deliveryTime,
}) => {
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
        <div className="text-xl font-bold truncate">{name}</div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-gray-500 ">{rating}</span>
          <span className="text-gray-500 ml-6">{deliveryTime}</span>
        </div>
        <div className="text-gray-700 truncate">{cuisine.join(", ")}</div>
        <div className="text-gray-500 ">{location}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
