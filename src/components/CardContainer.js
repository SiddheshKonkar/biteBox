import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const CardContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [masterCollection, setMasterCollection] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleRating = () => {
    const newCollection = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4.5
    );
    setRestaurants(newCollection);
  };

  const handleSearch = () => {
    const filterdData = masterCollection.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filterdData);
  };
  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setMasterCollection(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(restaurants);

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      {/* Search & Filters */}
      <div className="flex justify-between gap-4 p-4 mx-10 mt-8">
        <button className="bg-amber-600 rounded-lg p-2" onClick={handleRating}>
          Top Rated Restaurants
        </button>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="bg-amber-100 rounded-lg p-2 w-96 border-2 border-pink-950"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-amber-600 rounded-lg p-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {restaurants.length === 0 && (
        <div className="text-center text-3xl font-bold">
          No match found for "{searchText}"
        </div>
      )}
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
