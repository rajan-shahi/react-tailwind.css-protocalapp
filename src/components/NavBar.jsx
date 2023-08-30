import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" w-full h-[90px]  bg-black">
      <div className=" max-w-[1240px]  mx-auto p-4 flex justify-between  items-center h-full ">
        <div>
          <h1 className=" text-[#00d8ff]">DEFI</h1>
        </div>
        <div className=" hidden md:flex">
          <ul className=" flex  text-white items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className=" ml-4">Use Defi</button>
          </ul>
        </div>
        {/* Hamburger menu */}
        <div onClick={handleNav} className=" block md:hidden">
          {nav ? (
            <MdOutlineClose size={30} className=" text-white" />
          ) : (
            <MdOutlineMenu size={30} className=" text-white" />
          )}
        </div>
        {/* mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className=" text-2xl">Platform</li>
            <li className=" text-2xl">Developers</li>
            <li className=" text-2xl">Community</li>
            <li className=" text-2xl">About</li>
            <button className=" m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
