import React from "react";

const Header = () => {
  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center px-5 justify-around bg-amber-100 ">
        <a href="/">
          <img src="../assets/biteboxLogo.png" className="h-24 w-24" />
        </a>
        <div className="flex gap-14">
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            Home
          </a>
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            About
          </a>
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            Menu
          </a>
          <a className="text-amber-700 font-semibold	text-lg" href="#">
            Contact
          </a>
        </div>
        <a className="text-amber-700 font-semibold	text-lg" href="#">
          Cart
        </a>
      </div>

      {/* Mobile Nav */}
      <div className=" flex items-center px-5 justify-between bg-amber-100 md:hidden ">
        <a href="/">
          <img src="../assets/biteboxLogo.png" className="h-20 w-20" />
        </a>
        <img src="../assets/hamburger.png" className="h-14 w-14" />
      </div>
    </>
  );
};

export default Header;
