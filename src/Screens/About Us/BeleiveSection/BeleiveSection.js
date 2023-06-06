import React from "react";
import assetIcons from "../../../Assets/icons/Icons";
import { styles } from "../../../Utils/styles/styles";

const BeleiveSection = () => {
  return (
    <div className="flex-col flex justify-center ">
      <div className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-col items-center">
          <div className="text-white right-[8rem] lg:right-[15rem] top-0 lg:top-0 2xl:top-10 relative xl:w-14 lg:w-12 w-8">
            <img src={assetIcons.topQoute} alt="qoute" className="" />
          </div>

          <p
            className="2xl:text-[40px] xl:text-[35px] lg:text-[30px]"
            style={styles.aboutUsHeading}
          >
            They believe in us
          </p>
          <p
            className="2xl:text-[40px] xl:text-[35px] lg:text-[30px]"
            style={styles.maintext}
          >
            and we believe in them
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full pt-4">
        <p
          className="2xl:text-[24px] xl:text-[20px] lg:text-[18px]"
          style={styles.OurBeleivepara}
        >
          As a team of experts in design and technology supporting business
          growth, we see the
        </p>
        <p
          className="2xl:text-[24px] xl:text-[20px] lg:text-[18px]"
          style={styles.OurBeleivepara}
        >
          potential and great possibilities in our clients' ideas. We know how
          to take these uncut.
        </p>
        <p
          className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] text-center"
          style={styles.OurBeleivepara}
        >
          diamonds and make them shine.
        </p>
        <div className=" text-white left-[10rem] lg:left-[14rem] lg:bottom-0 2xl:bottom-5 relative xl:w-14 lg:w-12 w-8">
          <img src={assetIcons.bottomQoute} alt="qoute" className="" />
        </div>
      </div>
    </div>
  );
};

export default BeleiveSection;
