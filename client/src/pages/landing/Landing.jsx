import React from "react";

import MainContent from "./MainContent";
import TopNav from "../../components/TopNav/TopNav";

const Landing = () => {
  return (
    <div className=" h-full">
      <TopNav />
      <MainContent />
    </div>
  );
};

export default Landing;
