import React, { useState } from "react";
import { styles } from "../Utils/styles/styles";

const PortfolioCard = ({ heading, text, image, onClick }) => {
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
      className="relative z-20 2xl:rounded-[30px] xl:rounded-[28px] lg:rounded-[26px] md:rounded-[20px] flex flex-col p-5 xl:p-10 text-primary hover:text-white"
    >
      <div className="mb-6 xl:h-56 2xl:h-60 lg:h-44 md:h-40">
        <img
          src={image}
          alt="portfolio-images"
          className=" object-fill w-full h-full 2xl:rounded-[20px] md:rounded-[10px]"
        />
      </div>
      <div className="pl-2 flex flex-col gap-4">
        <div>
          <p className="2xl:text-[20px] xl:text-[19px] md:text-[14px] lg:text-[16px]">
            {/* {heading} */}
          </p>
          <p
            style={styles.portfolio_h1}
            className="2xl:text-[26px] xl:text-[24px] md:text-[18px] lg:text-[20px]"
          >
            {text}
          </p>
        </div>

        {/***************** Button Styling  ************/}

        <div
          style={isHover ? styles.portfolio_btn_Change : styles.portfolio_btn}
          className="w-fit cursor-pointer 2xl:text-[20px] xl:text-[18px] lg:text-[14px] md:text-[1.5vw] flex items-center justify-center gap-2 lg:gap-3 bg-[#262626]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          Discover
          <div
            className="rounded-full"
            style={
              isHover ? styles.portfolio_circle_change : styles.portfolio_circle
            }
          >
            <span className=" w-6 h-6 xl:w-7 xl:h-7 flex items-center justify-center rounded-full ring-1 ring-white text-sm xl:text-base ">
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

export default PortfolioCard;
