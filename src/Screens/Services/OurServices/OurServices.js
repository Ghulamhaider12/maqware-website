import React from "react";
import assetImages from "../../../Assets/images/image";
import Button from "../../../Components/Button";
import Counter from "../../../Components/Counter";
import { styles } from "../../../Utils/styles/styles";

const OurServices = () => {
  const scrollTo = () => {
    let element = document.getElementById("contactSection");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main-container flex h-screen max-w-[1440px] w-[90%] mx-auto ">
      {/* Our Services Side */}
      <div className="w-1/2 flex justify-start items-center">
        <div className="flex flex-col gap-4">
          <div
            style={styles.maintext}
            className="2xl:text-[40px] xl:text-[36px] text-[34px]"
          >
            <p>Our</p>
            <p>Services</p>
          </div>
          <div
            style={styles.OurBeleivepara}
            className="2xl:text-[28px] xl:text-[24px] text-[20px]"
          >
            <p>With combined experience of over 20</p>
            <p>years in the industry, our young</p>
            <p>executive team is eager and devoted</p>
            <p>to turn your idea into reality.</p>
          </div>
          <div>
            <Button
              title="Let's Build"
              onClick={scrollTo}
              fontSize={
                "xl:text-[14px] 2xl:text-[16px] lg:text-[12px] md:text-[14px]  "
              }
              height={"2xl:h-[50px] lg:h-[40px] md:h-[40px]"}
              width={"md:w-[120px]  lg:w-[120px] xl:w-[150px] 2xl:w-[180px]"}
            />
          </div>
        </div>
      </div>

      {/* CounterSide */}
      <div className="w-1/2 h-fit">
        <div className="flex">
          <div className="w-1/3 h-fit">
            <div>
              <img
                src={assetImages.Shape1}
                alt="Shape1"
                className="ml-[45%] object-fill xl:h-[270px] lg:h-[230px] 2xl:h-[360px] w-fit"
              />
            </div>
            <Counter
              counterstart={0}
              counterEnd={65}
              counterDelay={0}
              counterDuration={2}
              counterDecimal={0}
              subtext={"Projects Delivered"}
              classProp="relative bottom-12"
              text={
                "xl:text-[2xl:text-[60px] lg:text-[55px] xl:text-[55px] -mt-7"
              }
            />
          </div>
          <div className="w-1/3 h-fit">
            <div>
              <img
                src={assetImages.Shape2}
                alt="Shape2"
                className="ml-[44%] object-fill xl:h-[140px] lg:h-[140px] 2xl:h-[260px] w-fit"
              />
            </div>
            <Counter
              counterstart={0}
              counterEnd={5.0}
              counterDelay={0}
              counterDuration={1}
              counterDecimal={1}
              subtext={"Ratings"}
              classProp="relative bottom-12"
              text={
                "xl:text-[2xl:text-[60px] lg:text-[55px] xl:text-[55px] -mt-7"
              }
            />
          </div>
          <div className="w-1/3 -ml-[3%] h-fit">
            <div className="">
              <img
                src={assetImages.Shape3}
                alt="Shape3"
                className="ml-[45%] object-fill xl:h-[490px] lg:h-[300px] 2xl:h-[480px] w-fit"
              />
            </div>
            <Counter
              counterstart={0}
              counterEnd={35}
              counterDelay={0}
              counterDuration={2}
              counterDecimal={0}
              subtext={"Clients"}
              classProp="relative bottom-12"
              text={
                "xl:text-[2xl:text-[60px] lg:text-[55px] xl:text-[55px] -mt-7"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
