import React from "react";
import StatsRibbon from "./_components/StatsRibbon";

const HomePage = () => {
  return (
    <div className="w-7/12 bg-slate-200 rounded-md p-5 shadow-sm">
      <StatsRibbon />
      <div>Buttons</div>
      <div>Text</div>
    </div>
  );
};

export default HomePage;
