import React from "react";
import assetImages from "../../../Assets/images/image";
import Button from "../../../Components/Button";
import { styles } from "../../../Utils/styles/styles";

const InnvoatingIndustries = () => {
  const scrollTo = () => {
    let element = document.getElementById("contactSection");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main-container flex lg:my-10 max-w-[1440px] w-[100%] mx-auto">
      <div className="w-1/2 flex justify-start items-center md:ml-10 lg:ml-[3.5rem] xl:ml-[4.5rem] 2xl:ml-0">
        <div className="flex flex-col gap-3 ">
          <div
            style={styles.maintext}
            className="2xl:text-[40px] xl:text-[36px] lg:text-[32px] text-[30px]"
          >
            <p>Innovating</p>
            <p>
              your business Digitally <span className="text-primary">|</span>
            </p>
          </div>
          <div
            style={styles.OurBeleivepara}
            className="2xl:text-[28px] xl:text-[24px] text-[20px]"
          >
            <p>Your ultimate one-stop solution !</p>
            <p>We power your ideas, and digitally</p>
            <p>transform them innovative industry</p>
            <p>solutions.</p>
          </div>
          <div>
            <Button
              title="Let's Build"
              onClick={scrollTo}
              fontSize={
                "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[12px]"
              }
              height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[35px]"}
              width={"2xl:w-[150px] lg:w-[135px] md:w-[110px] xl:w-[140px]"}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={assetImages.iPhone} alt="iphone" />
      </div>
    </div>
  );
};

export default InnvoatingIndustries;
