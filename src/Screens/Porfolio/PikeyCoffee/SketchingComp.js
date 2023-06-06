import React from "react";
import { styles } from "../../../Utils/styles/styles";

const SketchingComp = ({ heading, text, img }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p
          className=" text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] "
          style={styles.aboutUsHeading}
        >
          {heading}
        </p>
        <p
          className=" 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[12px] "
          style={styles.Ourleadertext}
        >
          {text}
        </p>
      </div>

      <div className="">
        <img src={img} alt="PIKEYCOFFEEInterior" className="" />
      </div>
    </div>
  );
};

export default SketchingComp;
