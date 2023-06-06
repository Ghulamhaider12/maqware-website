import React from "react";
import { AnimationTag } from "../../../Components/Text";
import HiringProcessSectionComp from "./HiringProcessSectionComp";

const HiringProcessSection = () => {
  return (
    <div>
      <div className="py-10">
        <AnimationTag>Hiring Process</AnimationTag>
      </div>
      <div className=" bg-[#262626] py-14">
        <div className="flex xl:gap-8 gap-4 max-w-[1440px] w-[90%] mx-auto justify-center ">
          <HiringProcessSectionComp
            Numb={"01."}
            Heading={"Apply"}
            textpara={
              "Start off with following us on LinkedIn and applying to the vacancies posted there."
            }
          />
          <HiringProcessSectionComp
            Numb={"02."}
            Heading={"Review"}
            textpara={
              "Our HRD will review all the job applications and contact the shortlisted candidates."
            }
          />
          <HiringProcessSectionComp
            Numb={"03."}
            Heading={"Interview"}
            textpara={
              "HRD will schedule interviews checking availability of applicant and respective interviewers."
            }
          />
          <HiringProcessSectionComp
            Numb={"04."}
            Heading={"OnBoarding"}
            textpara={
              "After selection our team will help in adjusting the candidate in new role. Viola! You're part of the Maqware family."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HiringProcessSection;
