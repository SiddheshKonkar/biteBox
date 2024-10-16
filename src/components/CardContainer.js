import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const CardContainer = () => {
  let [restaurants, setRestaurants] = useState([
    {
      name: "Chinese Wok",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
      cuisine: "Chinese, Asian, Tibetan, Desserts",
      rating: 4.1,
      location: "Mumbai",
    },
    {
      name: "KFC",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
      cuisine: "Burgers, Fast Food, Rolls & Wraps",
      rating: 5,
      location: "Mumbai",
    },
    {
      name: "Burger King",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG",
      cuisine: "Burgers, American",
      rating: 4.2,
      location: "Mumbai",
    },
    {
      name: "Subway",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/13/f1042a40-6c67-4a11-b2cc-11f2337150be_9052.jpg",
      cuisine: "Salads, Snacks, Desserts, Beverages",
      rating: 4.5,
      location: "Mumbai",
    },
    {
      name: "Chinese Wok",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
      cuisine: "Chinese, Asian, Tibetan, Desserts",
      rating: 4.1,
      location: "Mumbai",
    },
    {
      name: "KFC",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
      cuisine: "Burgers, Fast Food, Rolls & Wraps",
      rating: 5,
      location: "Mumbai",
    },
    {
      name: "Burger King",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG",
      cuisine: "Burgers, American",
      rating: 4.2,
      location: "Mumbai",
    },
    {
      name: "Subway",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/13/f1042a40-6c67-4a11-b2cc-11f2337150be_9052.jpg",
      cuisine: "Salads, Snacks, Desserts, Beverages",
      rating: 4.5,
      location: "Mumbai",
    },
  ]);

  const handleRating = () => {
    const newCollection = restaurants.filter(
      (restaurant) => restaurant.rating >= 4.5
    );
    setRestaurants(newCollection);
  };

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
            name={restaurant.name}
            image={restaurant.image}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            location={restaurant.location}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
