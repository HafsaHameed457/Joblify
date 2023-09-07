import React from "react";
import logo from "../../assets/images/logo.svg";
const TopNav = () => {
  return (
    <div className="flex w-full font-serif">
      <div className="flex gap-2">
        <img src={logo} alt="" className=" inline" />
        <h1 className="  inline text-[2vw] font-bold text-[#7B3F00] !font-LexendDeca">
          Joblify
        </h1>
      </div>
    </div>
  );
};

export default TopNav;
