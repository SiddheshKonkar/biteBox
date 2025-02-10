const RestuaranInfo = ({
  name,
  avgRating,
  totalRatingsString,
  costForTwoMessage,
  cuisines,
  areaName,
}) => {
  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg p-4 w-8/12 mx-auto my-10">
        <div className="font-bold text-2xl">{name}</div>
        <div className="flex justify-start my-2">
          <div className="font-semibold">
            ⭐{avgRating} ({totalRatingsString})
          </div>
          <div className="ml-4 font-semibold">{costForTwoMessage}</div>
        </div>
        {cuisines && (
          <div className="font-semibold text-orange-600 underline">
            {cuisines.join(", ")}
          </div>
        )}
        <div className="font-semibold">{areaName}</div>
      </div>
    </>
  );
};
export default RestuaranInfo;
