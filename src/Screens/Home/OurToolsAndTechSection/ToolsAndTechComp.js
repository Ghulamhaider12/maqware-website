import React from "react";
import assetIcons from "../../../Assets/icons/Icons";

const ToolsAndTechComp = () => {
  return (
    <div className="bg-[#262626] py-14 ">
      <div className="flex items-center gap-28 2xl:gap-44">
        <div className="w-24 mt-2 ">
          <img src={assetIcons.mysql} alt="My Sql" />
        </div>
        <div className="w-24 ">
          <img src={assetIcons.laravel} alt="Laravel" />
        </div>
        <div className="w-24 !mt-5">
          <img src={assetIcons.php} alt="PHP" />
        </div>
        <div className="w-24 ">
          <img src={assetIcons.js} alt="Js" />
        </div>
        <div className="w-32 !mt-8 ">
          <img src={assetIcons.mongo} alt="Mongo" />
        </div>
        <div className="w-24 ">
          <img src={assetIcons.react} alt="React js" />
        </div>
        <div className="w-24 ">
          <img src={assetIcons.angular} alt="Angular Js" />
        </div>
        {/* <img src={assetIcons.node} alt="Node Js" /> */}
        {/* <img src={assetIcons.express} alt="Express" /> */}
        {/* <img src={assetIcons.vuejs} alt="Vue js" /> */}
      </div>
    </div>
  );
};
export default ToolsAndTechComp;
