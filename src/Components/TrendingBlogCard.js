import React, { useState } from "react";
import { styles } from "../Utils/styles/styles";

const TrendingBlogCard = ({ img, Date, Heading, para }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      style={styles.cardsize}
      className="w-fit lg:h-[25rem] 2xl:h-[33.5rem] xl:h-[29rem] md:h-[26rem] rounded-[30px]"
    >
      <div className="p-5 gap-4">
        <div className="">
          <img src={img} alt="" className="w-full xl:h-56 2xl:h-60" />
        </div>
        <div className="flex flex-col items-start gap-2 pt-2">
          <span
            style={styles.InnovativePara}
            className="2xl:text-[14px] xl:text-[12px] text-[10px]"
          >
            {Date}
          </span>
          <p
            style={styles.TrendingBlogCardHead}
            className="2xl:text-[24px] xl:text-[18px] text-[16px] h-[6vw] 2xl:h-[5.5vw]"
          >
            {Heading}
          </p>
          <p
            style={styles.InnovativePara}
            className=" 2xl:text-[16px] xl:text-[14px] text-[12px]"
          >
            {para}
          </p>
        </div>

        {/***************** Button Styling  ************/}

        <div
          style={isHover ? styles.portfolio_btn_Change : styles.portfolio_btn}
          className="w-fit cursor-pointer 2xl:text-[20px] xl:text-[18px] lg:text-[14px] md:text-[1.5vw] flex items-center justify-center gap-2 lg:gap-3 mt-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Read More
          <div
            className="rounded-full"
            style={
              isHover ? styles.portfolio_circle_change : styles.portfolio_circle
            }
          >
            <span className=" w-6 h-6 xl:w-6 xl:h-6 flex items-center justify-center rounded-full ring-1 ring-white text-sm xl:text-sm ">
              {" "}
              &#8594;
            </span>
          </div>
        </div>

        {/* div end */}
      </div>
    </div>
  );
};

export default TrendingBlogCard;
