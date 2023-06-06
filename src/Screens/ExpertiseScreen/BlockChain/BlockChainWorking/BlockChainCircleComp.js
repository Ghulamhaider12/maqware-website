import React from "react";
import { styles } from "../../../../Utils/styles/styles";

const BlockChainCircleComp = ({ text }) => {
  return (
    <div className="flex items-center justify-center relative ">
      <div className="w-40 h-40 rounded-full bg-[#262626] flex justify-center items-center">
        <span className="text-center w-32 -rotate-90 2xl:text-[14px] xl:text-[14px] lg:text-[12px] md:text-[9px] text-[#BCBCBC]">
          {text}
        </span>
      </div>
      <div className="-rotate-90 -ml-1" style={styles.polygonStyle}></div>
      <div
        className="w-32 h-[2px] -ml-1 bg-[#262626]"
        style={styles.blockChainCircleLine}
      ></div>
    </div>
  );
};

export default BlockChainCircleComp;
