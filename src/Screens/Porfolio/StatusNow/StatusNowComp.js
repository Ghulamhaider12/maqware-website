import React from "react";
import assetIcons from "../../../Assets/icons/Icons";
import { styles } from "../../../Utils/styles/styles";

const StatusNowComp = ({ text1, text2, text3, number, flexcolreverse }) => {
  return (
    <div>
      <div
        className={`${
          flexcolreverse ? flexcolreverse : "flex-col"
        } flex items-center relative `}
      >
        <p
          className="text-center xl:text-xl my-2 lg:text-base md:text-sm"
          style={styles.happyclientp2_h}
        >
          {text1}
          <br /> {text2} <br /> {text3}
        </p>
        <div className="h-6 w-6 bg-[#55c5ce] rounded-full flex flex-col items-center justify-center">
          <div className="h-4 w-4 rounded-full border-[#999999] border-4"></div>
        </div>
        <div className="h-40 w-1 bg-[#55c5ce]"></div>
        <div className="relative flex flex-col justify-center items-center">
          <div className="h-32 w-32">
            <img
              src={assetIcons.circle}
              alt="Lunch"
              className="h-full w-full object-fill"
            />
          </div>
          <p className="text-2xl absolute" style={styles.caseStudyCircle}>
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusNowComp;
