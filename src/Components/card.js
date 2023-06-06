import React from "react";
import { useState } from "react";
import { styles } from "../Utils/styles/styles";

const Card = ({ heading, image, text, OnClick, experitseId }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className="!cursor-pointer flex justify-center p-6 leading-7 mb-10 relative z-30 2xl:rounded-[30px] xl:rounded-[28px] lg:rounded-[26px] md:rounded-[20px] "
      style={isHover ? styles.HoverExpertiseCard : styles.ExpertiseCard}
      id={experitseId}
      onClick={OnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* card circle with in diagram */}
      <div
        className="w-16 h-16 lg:w-[90px] lg:h-[90px] xl:h-[100px] xl:w-[100px] 2xl:h-[110px] 2xl:w-[110px] rounded-full flex items-center justify-center absolute z-30 lg:-top-12 md:-top-8"
        style={styles.ExpertiseCircle1}
      >
        <div
          className="w-14 h-14 lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px] rounded-full flex items-center justify-center "
          style={styles.ExpertiseCircle2}
        >
          <div
            className="w-8 h-8 lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px] 2xl:h-[70px] 2xl:w-[70px] rounded-full flex items-center justify-center "
            style={styles.ExpertiseCircle3}
          >
            <img src={image} alt="" className="w-[100%] p-2" />
          </div>
        </div>
      </div>

      {/* Text card */}
      <div className="text-center lg:pt-12 xl:pt-14 2xl:pt-16 pb-2 md:pt-10">
        <span
          style={styles.cardtext_heading}
          className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
        >
          {heading}
        </span>
        <p
          style={styles.cardtxt_happyclient_formtxt}
          className="md:text-[11px] lg:text-[13.4px] xl:text-[14px] 2xl:text-[19px] lg:pt-1 xl:pt-3 2xl:pt-2"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
