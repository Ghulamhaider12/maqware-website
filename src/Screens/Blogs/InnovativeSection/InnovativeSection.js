import React, { useState } from "react";
import assetImages from "../../../Assets/images/image";
import { styles } from "../../../Utils/styles/styles";

const InnovativeSection = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div className=" max-w-[1440px] w-[90%] mx-auto">
      <div className="flex flex-col  ">
        {/* Text */}
        <div
          className="mt-[20px] lg:text-[35px] xl:text-[38px] 2xl:text-[40px] text-[26px]"
          style={styles.maintext}
        >
          <p>We are Creative </p>

          <p className="ml-40">
            <b className="text-primary">&</b> Innovative{" "}
            <b className="text-primary">|</b>
          </p>
        </div>
        {/*Picture  */}
        {/***************** Button Styling ************/}
        <div className="gap-10 2xl:text-[26px] xl:text-2xl text-lg flex mt-5 justify-between">
          <div
            className="flex gap-2 items-center "
            style={isHover ? styles.portfolio_btn_Change : styles.portfolio_btn}
          >
            {/***************** Button Styling  ************/}

            <div
              style={
                isHover ? styles.portfolio_btn_Change : styles.portfolio_btn
              }
              className="w-fit cursor-pointer 2xl:text-[20px] xl:text-[18px] lg:text-[14px] md:text-[1.5vw] flex items-center justify-center gap-2 lg:gap-3 "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Discover
              <div
                className="rounded-full"
                style={
                  isHover
                    ? styles.portfolio_circle_change
                    : styles.portfolio_circle
                }
              >
                <span className=" w-6 h-6 xl:w-6 xl:h-6 flex items-center justify-center rounded-full ring-1 ring-white text-sm xl:text-base 2xl:text-sm ">
                  {" "}
                  &#8594;
                </span>
              </div>
            </div>

            {/* div end */}
            <div className="opacity-70 w-full">
              <img src={assetImages.Mobile} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-40">
        <div className="flex flex-col gap-2 mt-2">
          <div>
            <span className="" style={styles.InnovativeParaBlog}>
              -
            </span>
            <span
              className="ml-4 text-[16px] xl:text-[18px] 2xl:text-[20px]"
              style={styles.InnovativePara}
            >
              Protecting Employees Using Secure AWS Solutions
            </span>
          </div>
          <div>
            <span className="" style={styles.InnovativeParaBlog}>
              -
            </span>
            <span
              className="ml-4 text-[16px] xl:text-[18px] 2xl:text-[20px]"
              style={styles.InnovativePara}
            >
              Healthcare Cloud: Fort Knox for the Healthcare Data
            </span>
          </div>
          <div>
            <span className="" style={styles.InnovativeParaBlog}>
              -
            </span>
            <span
              className="ml-4 text-[16px] xl:text-[18px] 2xl:text-[20px]"
              style={styles.InnovativePara}
            >
              Automation: Checking 350 Parameters Every Five Minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeSection;
