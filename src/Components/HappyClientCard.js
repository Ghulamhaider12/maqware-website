import React from "react";
import { styles } from "../Utils/styles/styles";

const HappyClientCard = ({ img, text1, text2, text3 }) => {
  return (
    <div
      style={styles.happyclientCard}
      className="2xl:w-[900px] 2xl:h-[480px] xl:h-[394px] xl:w-[700px] lg:h-[350px] lg:w-[550px] md:w-[60vw] md:h-[300px] lg:px-4 md:px-[3vw] xl:px-8 md:pt-[5vh] lg:pt-12 2xl:pt-16 xl:pt-14 flex flex-col justify-between "
    >
      <img
        src={img}
        alt="Sean-pic"
        className="2xl:w-[120px] md:w-[70px] md:h-[70px] 2xl:h-[120px] xl:w-[100px] xl:h-[100px] lg:h-[80px] lg:w-[80px] absolute 2xl:top-3 xl:top-[24px] lg:-top-[0px] md:top-[3px] rounded-full"
      />
      <span
        style={styles.happyclientp1}
        className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[12px] "
      >
        {text1}
      </span>
      <div className="mb-5">
        <span
          style={styles.happyclientp2_h}
          className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px]"
        >
          {text2} {", "}
        </span>
        <span
          style={styles.happyclientp2}
          className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px]"
        >
          {text3}
        </span>
      </div>
    </div>
  );
};

export default HappyClientCard;
