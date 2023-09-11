import React from "react";
import main from "../../assets/images/main.svg";
import Button from "../../components/Button/Button";
import { useNavigate, Outlet } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  return (
    <div className="md:flex h-[100%] md:h-auto px-[10%]">
      <div className="w-[100%] md:w-[50%] my-5 sm:my-10  md:my-auto font-Roboto  gap-5  md:pr-7 md:text-left text-center items-center justify-center ">
        <h1 className=" font-Roboto text-2xl sm:text-4xl [word-spacing:5px] tracking-[0.2vw] font-extrabold">
          Job <span className="text-[#9b5204]">Tracking</span> App
        </h1>
        <p className="text-[#84582a] pt-5 sm:pt-7 leading-8">
          Your gateway to a world of exciting career opportunities. Whether
          you're a seasoned professional or a recent graduate eager to kickstart
          your journey you are at a right place.
        </p>

        <Button
          children={"Login / Register"}
          className={"my-6"}
          onClick={() => navigate("/login")}
        />
      </div>
      <div className="w-[80%] mx-auto my-10 md:w-[50%] items-center  justify-center text-center center flex">
        <img src={main} width={"100%"} />
      </div>
    </div>
  );
};

export default MainContent;
