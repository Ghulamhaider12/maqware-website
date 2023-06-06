import React from "react";
import { styles } from "../Utils/styles/styles";

const ProcessCard = ({ heading, details }) => {
  return (
    <div className="2xl:h-56 xl:h-60 lg:h-48 flex flex-col gap-1 justify-center ">
      <span
        style={styles.process_heading}
        className="2xl:text-[24px] xl:text-[21px] lg:text-[19px] md:text-[16px]"
      >
        {heading}
      </span>
      <span
        style={styles.process_text}
        className="2xl:text-[16px] xl:text-[15px] lg:text-[12px] h-[8rem] md:text-[10px]"
      >
        {details}
      </span>
    </div>
  );
};

export default ProcessCard;
