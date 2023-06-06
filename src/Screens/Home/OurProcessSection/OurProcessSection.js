import React from "react";
import ProcessCard from "../../../Components/ProcessCard";
import { AnimationTag } from "../../../Components/Text";
import ProcessCircleSection from "./ProcessCircleSection";

const OurProcessSection = () => {
  return (
    <div className="flex flex-col justify-center items-center  2xl:-mt-16 lg:-mt-16 xl:-mt-16 md:-mt-16 max-w-[1440px] w-[90%] mx-auto">
      {/******************* Text ****************************/}

      <AnimationTag>Our Process</AnimationTag>
      {/******************* First Four Card ****************************/}
      <div className=" grid overflow-hidden grid-cols-4 md:gap-2 grid-rows-1 text-start ">
        <ProcessCard
          heading={"Requirment Gathering"}
          details={
            "This phase is crucial to both of us and involves closely working with your team to learn about your business, identify pain points & gather requirements for the solution."
          }
        />
        <ProcessCard
          heading={"Design"}
          details={
            "In the designing process, our UX/UI designers produce wireframes, develop designs, and build prototypes per specifications, keeping the client team informed at every stage."
          }
        />
        <ProcessCard
          heading={"Testing"}
          details={
            "Here our Quality Assurance team takes over. Since its one of the most critical phases.Some of our testing techniques include code quality, unit testing, functional testing, integration testing, performance testing & security testing"
          }
        />
        <ProcessCard
          heading={"Maintenance"}
          details={
            "Development is a cycle & always has room for improvement. Therefore, this stage entails routine maintenance and upgrades.We work with you to improve the product. We are more than just service providers; we are your remote team"
          }
        />
      </div>

      <ProcessCircleSection />

      {/******************* Last Three Card ****************************/}
      <br />

      <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-3 items-baseline md:mx-12 lg:mx-20 xl:mx-20 2xl:mx-40 2xl:pl-10 md:pl-10 lg:pl-10 xl:pl-8 lg:-mt-6 xl:-mt-6 2xl:mt-6 md:-mt-16">
        <ProcessCard
          heading={"Analysis"}
          details={
            "Apart from analyzing the requirements for the desired solution, this phase also includes Resource Allocation, Capacity Planning, Project Scheduling, Cost Estimation, and Provisioning"
          }
        />
        <ProcessCard
          heading={"Development"}
          details={
            "By the fourth phase all the paperwork & discussion leads to the development cycle, entailing actual coding to produce a software solution. We follow a proper workflow process, keeping your team informed at every milestone, resulting in testable, functional software"
          }
        />
        <div className="ml-8">
          <ProcessCard
            heading={"Deployment"}
            details={
              "This phase is usually highly automated & invisible; software is deployed instantly as per your teams preference & endorsement"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcessSection;
