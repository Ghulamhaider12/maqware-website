import React from "react";
import assetImages from "../../../Assets/images/image";
import { styles } from "../../../Utils/styles/styles";

const OpenVacancyComp = ({ jobHeading, experience, onOpen }) => {

  return (
    <div
      className="flex flex-col justify-center items-center gap-8 p-4"
      style={styles.benefitComp1}
    >
      <div className="text-center">
        <h1 className="text-[1.7vw] 2xl:text-[1.2rem] py-2 text-[#BCBCBC]">
          {jobHeading}
        </h1>
        <p
          style={styles.cardtxt_happyclient_formtxt}
          className="md:text-[11px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px] leading-5"
        >
          {experience}
        </p>
      </div>
      <div
        className="flex gap-2 items-center"
        style={styles.cardtxt_happyclient_formtxt}
      >
        <div className="w-[1.1vw] 2xl:w-[0.8rem] flex items-center">
          <img src={assetImages.Location} alt="location" />
        </div>
        <p className="md:text-[11px] xl:py-3 py-1 lg:text-[16px] xl:text-[17px] 2xl:text-[19px] leading-5">
          MM Alam Road Gulberg, Lahore
        </p>
      </div>
      {/* <button
        onClick={onOpen}
        style={styles.cardtext_heading}
        className="text-[1vw] leading-5 underline 2xl:text-[1.16rem] !text-primary hover:text-[1.1vw] 2xl:hover:text-[1.2rem] hover:font-normal"
      >
        Read More
      </button> */}

    </div>
  );
};

export default OpenVacancyComp;
