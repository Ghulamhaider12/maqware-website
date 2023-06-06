import React from "react";
import { styles } from "../../../../Utils/styles/styles";

const HowWeWorkCard = ({ images, numb, heading, text }) => {
  return (
    <div className=" flex justify-center md:leading-4 lg:leading-6 mb-10 relative z-30 ">
      {/* Text card */}
      <div className="text-center pt-2 flex flex-col justify-center items-center gap-2">
        <div className="w-20 h-20">
          <img src={images} alt="" className="object-fill h-full w-full" />
        </div>
        <div className="h-[20vh] flex flex-col gap-2">
          <p className=" text-white font-semibold 2xl:text-[22px] xl:text-[20px] lg:text-[14px] md:text-[11px]">
            {numb}
          </p>

          <span
            style={styles.cardtext_heading}
            className="2xl:text-[20px] xl:text-[20px] lg:text-[14px] md:text-[11px]"
          >
            {heading}
          </span>
          <p
            style={styles.cardtxt_happyclient_formtxt}
            className="md:text-[9px] lg:text-[10px] xl:text-[14px] 2xl:text-[19px] lg:pt-1 xl:pt-3 2xl:pt-2"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkCard;
