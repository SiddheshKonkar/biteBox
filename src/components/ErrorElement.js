import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <h1 className="text-5xl text-red-500 font-bold">
          Error Code: {error.status}
        </h1>
        <h1 className="text-5xl text-red-500 font-bold">{error.statusText}</h1>
        <h1 className="text-2xl font-semibold">{error.data}</h1>
        <Link to="/">
          <button className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 text-black">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorElement;
