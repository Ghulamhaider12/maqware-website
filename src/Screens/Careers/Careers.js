import React from "react";
import ApplySection from "./ApplySection/ApplySection";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import HiringProcessSection from "./HiringProcessSection/HiringProcessSection";
import OpenVacancy from "./OpenVacancy/OpenVacancy";
import PictureSection from "./PictureSection/PictureSection";

const Careers = () => {
  return (
    <div className=" overflow-x-hidden">
      <PictureSection />
      <div className="flex flex-col justify-center items-center">
        <BenefitsSection />
        <OpenVacancy />
      </div>

      <HiringProcessSection />
      <div className="flex flex-col items-center justify-center">
        <ApplySection />
      </div>
    </div>
  );
};

export default Careers;
