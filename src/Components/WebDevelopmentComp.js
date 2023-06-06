import React from "react";
import { useState } from "react";
import assetIcons from "../Assets/icons/Icons";
import { styles } from "../Utils/styles/styles";

const WebDevelopmentComp = ({ img, heading1, heading2, description }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className='items-center flex justify-evenly gap-5 '>
      <div className='w-1/2 xl:h-[500px] lg:h-[500px] 2xl:h-[700px] flex items-center justify-center'>
        <img
          src={img}
          alt='services'
          className='opacity-60 object-fill h-auto  w-[100%]'
          style={{ transform: "rotate(-5deg)" }}
        />
      </div>
      <div className='w-1/2'>
        <div>
          <p
            className='2xl:text-[44px] xl:text-[36px] text-[32px]'
            style={styles.maintext}
          >
            {heading1} {heading2}
          </p>

          <p
            className='2xl:text-[22px] xl:text-[18px] text-[18px] w-2/3 '
            style={styles.cardtxt_happyclient_formtxt}
          >
            {description}
          </p>
        </div>
        <div className='w-fit pt-[10%]'>
          <div
            style={isHover ? styles.portfolio_btn_Change : styles.portfolio_btn}
            className='cursor-pointer 2xl:text-[22px] xl:text-[18px] text-[16px] flex items-center gap-4'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button>Read More </button>
            <div
              className='w-7 h-7 rounded-full flex justify-center items-center '
              style={
                isHover
                  ? styles.portfolio_circle_change
                  : styles.portfolio_circle
              }
            >
              <img
                src={assetIcons.ArrowIcon}
                alt='Arrow-icon'
                className='scale-75'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentComp;
