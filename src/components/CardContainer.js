import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const CardContainer = () => {
  let [restaurants, setRestaurants] = useState([]);

  const handleRating = () => {
    const newCollection = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4.5
    );
    setRestaurants(newCollection);
  };

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(restaurants);
  };

  getRestaurants();

  return (
    <>
      <button
        className="bg-amber-600 rounded-lg p-2 mx-24 mt-8 "
        onClick={handleRating}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap justify-center gap-4 p-4 mx-10">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant?.info?.name}
            imgID={restaurant?.info?.cloudinaryImageId}
            cuisine={restaurant?.info?.cuisines}
            rating={restaurant?.info?.avgRating}
            location={restaurant?.info?.locality}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
