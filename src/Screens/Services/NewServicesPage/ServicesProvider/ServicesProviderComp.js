import React from "react";
import { styles } from "../../../../Utils/styles/styles";

const ServicesProviderComp = ({ heading, text, image, serviceId, Inverse }) => {
  return (
    <div
      className="bg-[#111] h-[34rem] lg:h-[40rem] xl:h-[39.5rem] pt-72 -mb-0 xl:mb-0 xl:pt-4 2xl:pt-28 w-full"
      id={serviceId}
    >
      {Inverse ? (
        <div className="flex justify-center items-center 2xl:mt-20 -mt-0 xl:mt-[10.5rem] max-w-[1440px] w-[90%] mx-auto">
          <div className="w-1/2  flex flex-col gap-3 ml-2">
            <h1 className="text-white font-bold 2xl:text-[40px] xl:text-[36px] lg:text-[24px] text-[20px]">
              {heading} <b className="text-primary">|</b>
            </h1>
            <p
              className="text-justify 2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[12px] w-[40vw] 2xl:w-[40rem] "
              style={styles.formInputFields}
            >
              {text}
            </p>
          </div>
          <div className="w-1/2 mr-2 flex justify-center">
            <img src={image} alt="web" className="xl:h-96 lg:h-72 h-64" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center 2xl:mt-20 -mt-0 xl:mt-[10.5rem] max-w-[1440px] w-[90%] mx-auto">
          <div className="w-1/2 mr-2 flex justify-center">
            <img src={image} alt="web" className="xl:h-96 lg:h-72 h-64" />
          </div>
          <div className="w-1/2 flex flex-col gap-3 ml-2">
            <h1 className="text-white font-bold 2xl:text-[40px] xl:text-[36px] lg:text-[24px] text-[20px]">
              {heading} <b className="text-primary">|</b>
            </h1>
            <p
              className="text-justify 2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[12px] w-[40vw] 2xl:w-[40rem] "
              style={styles.formInputFields}
            >
              {text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesProviderComp;
