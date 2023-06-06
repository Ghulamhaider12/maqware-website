import React from "react";
import { styles } from "../../../Utils/styles/styles";

const PikeyCoffeeComp = ({ heading, text }) => {
  return (
    <div
      className=" flex justify-center md:p-3 xl:p-6 md:leading-4 lg:leading-6 mb-1 relative z-30 2xl:rounded-[30px] xl:rounded-[28px] lg:rounded-[25px] rounded-[20px] "
      style={styles.ExpertiseCard}
    >
      {/* Text card */}
      <div className="text-center p-3">
        <span
          style={styles.cardtext_heading}
          className="text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]"
        >
          {heading}
        </span>
        <p
          style={styles.cardtxt_happyclient_formtxt}
          className="2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] lg:pt-1 xl:pt-3 2xl:pt-2"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default PikeyCoffeeComp;
