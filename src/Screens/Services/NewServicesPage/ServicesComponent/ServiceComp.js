import React from "react";
import { styles } from "../../../../Utils/styles/styles";

const ServiceComp = ({ text, text2, OnClick }) => {
  return (
    <div
      className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#BCBCBC] text-center w-[7.5rem] 2xl:w-[8.8rem] xl:px-8 h-20 flex flex-col justify-center items-center cursor-pointer hover:!bg-gradient-to-t from-primary hover:!text-white"
      style={styles.benefitComp1}
      onClick={OnClick}
    >
      <h2>{text}</h2>
      <h2>{text2}</h2>
    </div>
  );
};

export default ServiceComp;
