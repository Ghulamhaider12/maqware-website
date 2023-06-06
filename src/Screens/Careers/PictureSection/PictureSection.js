import React from "react";
import assetImages from "../../../Assets/images/image";
import Text from "../../../Components/Text";

const PictureSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-80px)] overflow-hidden">
      <img
        src={assetImages.CareerBg}
        alt="CareersBGPicture"
        className="w-full absolute opacity-50 h-full object-cover xl:object-fill"
      />
      <div className="z-10 relative">
        <Text
          className={
            "text-white font-[tex-gyre-adventor-700]  text-[4vh] lg:text-[5.5vh] xl:text-[6vh] 2xl:text-[6.5vh] -mt-16"
          }
        >
          <p className="text-center">
            Lets Learn and
            <span className="text-primary"> Level Up</span> together!
          </p>
        </Text>
      </div>
    </div>
  );
};

export default PictureSection;
