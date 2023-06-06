import React from "react";
import assetImages from "../Assets/images/image";
import { styles } from "../Utils/styles/styles";

const Textwithimg = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex center items-center bg-blue-400 max-w-[1440px] w-[90%] mx-auto">
        <div
          className="text-white md:text-[1.7rem] lg:text-[2.5rem] xl:text-[3rem] "
          style={styles.maintext}
        >
          <p>User-friendly Mobile Apps,</p>
          <p className="ml-40">
            leveraging Smartphone’s capabilities
            <b className="text-[#55C5CE]">|</b>
          </p>
        </div>
      </div>
      <div className="flex bg-red-200 w-full">
        <div
          className=" flex w-[30%] justify-start items-center text-[16px] lg:text-[22px] xl:text-[28px] 2xl:text-[34px] md:text-[14px]"
          style={styles.aboutUsHeading}
        >
          <div className="absolute bg-green-400 ml-40">
            <p>We develop high-performing,</p>
            <p>scalable Mobile Apps.</p>
          </div>
        </div>
        <div className="flex xl:h-[calc(100vh-249px)] w-[70%] justify-end">
          <img
            src={assetImages.app}
            alt="app Development"
            className="object-fill "
          />
        </div>
      </div>
    </div>
  );
};

export default Textwithimg;
