import React from "react";

const NavBar = () => {
  return (
    <div className=" w-full h-[90px]  bg-black">
      <div className=" max-w-[1240px]  mx-auto p-4 flex justify-between  ">
        <div>
          <h1 className=" text-red-500">DEFI</h1>
        </div>
        <div>
          <ul>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
          </ul>
          <button>Use Defi</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
