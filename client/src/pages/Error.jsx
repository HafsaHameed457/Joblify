import React from "react";
import TopNav from "../components/TopNav/TopNav";
import notfound from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <TopNav />
      <div className="px-[10%] h-[40%] md:h-[50%] md:w-[60%] flex m-auto">
        <img src={notfound} />
      </div>
      <div className=" w-full flex m-auto text-center items-center justify-center flex-col gap-4 px-10">
        <h1 className=" font-Roboto text-2xl  sm:text-3xl [word-spacing:5px] tracking-[0.2vw] font-medium text-[#84582a]">
          Oh! Page Not Found
        </h1>
        <p className="text-[#84582a] sm:leading-8 font-Roboto ">
          We can't seem to find the page you're looking for{" "}
        </p>
        <Link to="/" className="font-Roboto text-[#84582a] italic underline">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default Error;
