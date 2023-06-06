import React from "react";
import { styles } from "../../../Utils/styles/styles";

const BenefitSectionComp = ({ img, text }) => {
  return (
    <div
      className="flex items-center justify-center gap-5  py-7"
      style={styles.benefitComp1}
    >
      <div className="w-[3.5vw]">
        <img src={img} alt="BenefitSectionImages" />
      </div>
      <div className="md:text-[10px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px] text-[#BCBCBC] w-40">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default BenefitSectionComp;
