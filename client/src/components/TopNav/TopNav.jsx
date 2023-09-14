import React from "react";
import Logo from "../Logo";
const TopNav = ({ className = "", navClass = "" }) => {
  return (
    <div
      className={`flex px-[10%] font-serif  pt-10 lg:pb-0 pb-10 ${className}`}
    >
      <div className="flex gap-3  text-center ">
        <Logo />
        <h1
          className={`inline text-[30px]  text-[#9b5204] font-Roboto text-center justify-center items-center tracking-[0.5vw]  font-bold ${navClass} !font-LexendDeca`}
        >
          Joblify
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default TopNav;
