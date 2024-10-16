// RestaurantCard.jsx
import React from "react";

const RestaurantCard = ({ name, image, cuisine, rating, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-700">{cuisine}</p>
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
