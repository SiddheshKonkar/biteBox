import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestuaranInfo from "./RestaurantInfo";
import NormalMenu from "./NormalMenu.js";
const Menu = () => {
  const params = useParams();
  const [resInfo, setResInfo] = useState([]);
  const [normalMenu, setNormalMenu] = useState([]);
  const [nestedMenu, setNestedMenu] = useState([]);

  console.log(params);
  const getMenu = async () => {
    try {
      const menu = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await menu.json();
      const menuCollection =
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
      console.log("menuCollection", menuCollection);
      const menuList = menuCollection.filter(
        (menuData) =>
          menuData.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log("NormalMenu", menuList);

      const restaurantInfo = json.data.cards[2].card.card.info;
      console.log("Resturant Info", restaurantInfo);

      const nestedMenuList = menuCollection.filter(
        (menuData) =>
          menuData.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
      console.log("nestedMenuList", nestedMenuList);
      setNormalMenu(menuList);
      setResInfo(restaurantInfo);
    } catch (err) {
      console.log("Something wnent wrong", err);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <>
      {resInfo.length !== 0 && <RestuaranInfo {...resInfo} />}
      <NormalMenu normalMenuData={normalMenu} />;
    </>
  );
};

export default Menu;
