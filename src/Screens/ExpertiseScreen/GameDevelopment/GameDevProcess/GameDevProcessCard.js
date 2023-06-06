import React from "react";
import { useState } from "react";
import { styles } from "../../../../Utils/styles/styles";

const GameDevProcessCard = ({ heading, text }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className=" flex justify-center md:p-3 xl:p-6 md:leading-4 lg:leading-6 mb-10 relative z-30 2xl:rounded-[30px] xl:rounded-[28px] lg:rounded-[25px] md:rounded-[20px]"
      style={isHover ? styles.HoverExpertiseCard : styles.ExpertiseCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text card */}
      <div className="text-center pt-2">
        <span
          style={styles.cardtext_heading}
          className="2xl:text-[20px] xl:text-[20px] lg:text-[12px] md:text-[9px]"
        >
          {heading}
        </span>
        <p
          style={styles.cardtxt_happyclient_formtxt}
          className="md:text-[9px] lg:text-[10px] xl:text-[14px] 2xl:text-[19px] lg:pt-1 xl:pt-3 2xl:pt-2"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default GameDevProcessCard;
