import React from "react";
import { styles } from "../Utils/styles/styles";

const FooterCard = ({ Heading, address, PhoneNumber, Image, CallIcon }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col justify-between items-center mt-4">
        <div className="w-6 h-6 lg:w-8 lg:h-8 mt-3">
          <img src={Image} alt="pak-flg" className="" />
        </div>
        <div
          className={CallIcon ? `w-6 h-6 lg:w-8 lg:h-8 mt-2 xl:mt-2` : "hidden"}
        >
          <img
            src={CallIcon}
            alt="call-icon"
            className="object-fill w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <p
          style={styles.footerPara}
          className={`2xl:text-[1rem] xl:text-[0.8rem] lg:text-[0.7rem] text-[0.6rem] mt-[2.2rem] ${
            !CallIcon && "-mt-7"
          }`}
        >
          {address}
        </p>
        <p
          style={styles.footerPara}
          className="xl:text-[0.8rem] lg:text-[0.7rem] text-[0.6rem] 2xl:text-[1rem] mb-[0.4rem]"
        >
          {PhoneNumber}
        </p>
      </div>
    </div>
  );
};

export default FooterCard;
