import React from "react";
// import { useState } from 'react';
import { styles } from "../../../../Utils/styles/styles";

const BlockChainComp = ({ Number, text }) => {
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  return (
    <div
      className=" flex w-[32.5%] justify-start items-center md:p-2 xl:p-3 relative z-30 2xl:rounded-[100px] xl:rounded-[90px] lg:rounded-[90px] md:rounded-[90px]"
      style={styles.ExpertiseCard}
      // style={isHover ? styles.HoverExpertiseCard : styles.ExpertiseCard}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* Text card */}
      <div className="">
        <div className="flex gap-2 items-center">
          <p className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary flex justify-center items-center">
            <span className="absolute 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[9px] text-white">
              {Number}
            </span>
          </p>
          <p
            style={styles.cardtxt_happyclient_formtxt}
            className="md:text-[9px] lg:text-[10px] xl:text-[14px] 2xl:text-[18px] "
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockChainComp;
