import React from "react";
import assetImages from "../../../../../Assets/images/image";
import DoubleTextWithImg from "../../../../../Components/DoubleTextWithImg";

const InteractiveGame = () => {
  return (
    <div className="">
      <div>
        <DoubleTextWithImg
          title1="Interactive Games"
          title2="that leave players Hooked"
          desc1="Interactive games"
          desc2="that leave players hooked!"
          img={assetImages.digitalMarketingbg}
        />
      </div>
      <div className="max-w-[1440px] w-[90%] mx-auto text-[#BCBCBC] font-[400] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] xl:leading-10">
        <p>
          With the ever-changing, diverse market, game development is quite
          competitive. Our team of expert game developers transforms your idea
          into a striking game that makes the audience want to play. We provide
          top-notch game development services, including 2D and 3D games, AI
          games, Unreal and Virtual Reality-based games, and cross-platform game
          development.
        </p>
      </div>
    </div>
  );
};
export default InteractiveGame;
