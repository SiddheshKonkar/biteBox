import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center px-5 justify-around bg-amber-100 ">
        <Link to="/">
          <img src="../assets/biteboxLogo.png" className="h-24 w-24" />
        </Link>
        <div className="flex gap-14">
          <Link className="text-amber-700 font-semibold	text-lg" to="/">
            Home
          </Link>
          <Link className="text-amber-700 font-semibold	text-lg" to="/about">
            About
          </Link>
          <Link className="text-amber-700 font-semibold	text-lg" to="/menu">
            Menu
          </Link>
          <Link className="text-amber-700 font-semibold	text-lg" to="/contact">
            Contact
          </Link>
        </div>
        <Link className="text-amber-700 font-semibold	text-lg" to="/cart">
          Cart
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className=" flex items-center px-5 justify-between bg-amber-100 md:hidden ">
        <Link to="/">
          <img src="../assets/biteboxLogo.png" className="h-20 w-20" />
        </Link>
        <img src="../assets/hamburger.png" className="h-14 w-14" />
      </div>
    </>
  );
};

export default Header;
