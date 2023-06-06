import React, { useEffect } from "react";
import ServicesProvider from "../ServicesProvider/ServicesProvider";
import ServiceComp from "./ServiceComp";
import { useLocation } from "react-router-dom";

const ServicesComponent = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state?.from) {
      scrollTo(state?.from);
    }
  });

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <div className="w-full bg-black top-[70px] sticky ">
        <div className="flex gap-5 flex-wrap justify-center 2xl:flex-nowrap py-5 max-w-[1440px] w-[90%] mx-auto">
          <ServiceComp
            text={"Web"}
            text2={"Development"}
            OnClick={() => scrollTo("webDevelopment")}
          />
          <ServiceComp
            text={"App"}
            text2={"Development"}
            OnClick={() => scrollTo("appDevelopment")}
          />
          <ServiceComp
            text={"Blockchain"}
            text2={"Development"}
            OnClick={() => scrollTo("blockchainDevelopment")}
          />
          <ServiceComp
            text={"Game"}
            text2={"Development"}
            OnClick={() => scrollTo("gameDevelopment")}
          />
          <ServiceComp
            text={"Digital"}
            text2={"Marketing"}
            OnClick={() => scrollTo("digitalMarketing")}
          />
          <ServiceComp
            text={"SEO"}
            text2={" Services"}
            OnClick={() => scrollTo("seoServices")}
          />
          <ServiceComp
            text={"Graphic"}
            text2={"Design"}
            OnClick={() => scrollTo("graphicDesign")}
          />
          <ServiceComp
            text={"UI/UX"}
            text2={" Design"}
            OnClick={() => scrollTo("uiuxDesign")}
          />
          <ServiceComp
            text={"Cloud "}
            text2={"Computing"}
            OnClick={() => scrollTo("cloudComputing")}
          />
        </div>
      </div>
      <ServicesProvider />
    </div>
  );
};

export default ServicesComponent;
