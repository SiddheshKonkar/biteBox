import React from "react";
import { MENU_IMG_URL } from "../constants";

const DishInfo = ({
  isVeg,
  name,
  defaultPrice,
  price,
  offerTags,
  imageId,
  description,
}) => {
  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg p-4 w-8/12 mx-auto my-10 flex items-start">
        <div className="w-3/4">
          <div>{isVeg ? "🟢" : "🔴"}</div>
          <div className="font-bold text-2xl"> {name}</div>
          <div className="text-xl text-green-600 font-semibold my-2">
            <span> ₹{defaultPrice ? defaultPrice / 100 : price / 100} </span>
            {offerTags && (
              <span>
                🏷️{offerTags[0].title} {offerTags[0].subTitle}
              </span>
            )}
          </div>
          <div className="text-sm text-gray-700">{description}</div>
        </div>
        <div className="w-1/4 ml-4">
          <img
            className="w-full h-[200px] object-cover rounded-lg"
            src={MENU_IMG_URL + imageId}
          />
        </div>
      </div>
    </>
  );
};

export default DishInfo;
