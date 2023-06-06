import React from "react";
import { styles } from "../../../Utils/styles/styles";

const HiringProcessSectionComp = ({ Numb, Heading, textpara }) => {
  return (
    <div className="flex flex-col gap-2 xl:w-1/4 w-1/4">
      <div>
        <div
          className="2xl:text-[28px] text-[20px] lg:text-[24px] xl:text-[26px] flex "
          style={styles.maintextBlue}
        >
          {Numb}
          <p
            className="2xl:text-[28px] text-[20px] lg:text-[24px] xl:text-[26px] ml-2"
            style={styles.maintext}
          >
            {Heading}
          </p>
        </div>
      </div>
      <p
        style={styles.cardtxt_happyclient_formtxt}
        className="md:text-[10px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] leading-7 "
      >
        {textpara}
      </p>
    </div>
  );
};

export default HiringProcessSectionComp;
