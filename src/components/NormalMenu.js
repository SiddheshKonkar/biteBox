import DishInfo from "./DishInfo";

const NormalMenu = ({ normalMenuData }) => {
  return (
    <>
      {normalMenuData.map((normalCategory) => (
        <div>
          <div className="font-bold text-2xl  text-orange-600 bg-slate-100 w-8/12 mx-auto p-2">
            {normalCategory.card.card.title}
          </div>
          <div>
            {normalCategory.card.card.itemCards?.map((itemCard) => (
              <DishInfo {...itemCard.card.info} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NormalMenu;
