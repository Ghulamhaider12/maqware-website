import React from "react";
import { styles } from "../../../Utils/styles/styles";

const ProjectPlanningComp = ({ heading, l1, l2, l3, l4, l5, l6 }) => {
  return (
    <div className="flex flex-col lg:my-4 my-2">
      <h1
        className="w-1/4 text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] ml-0"
        style={styles.ppCCompHead}
      >
        {heading}
      </h1>
      <div className=" mt-3 ml-0 flex flex-col gap-2">
        <div
          style={styles.happyclientp1}
          className="flex gap-2 items-center 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] ml-0"
        >
          <p
            className={`${
              l1 ? "bg-primary" : "bg-black"
            } rounded-full  h-2 w-2 bg-primary`}
          ></p>
          {l1}
        </div>
        <div
          style={styles.happyclientp1}
          className="flex gap-2 items-center 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] ml-0"
        >
          <p
            className={`${
              l2 ? "bg-primary" : "bg-black"
            } rounded-full  h-2 w-2 bg-primary`}
          ></p>
          {l2}
        </div>
        <div
          style={styles.happyclientp1}
          className="flex gap-2 items-center 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] ml-0"
        >
          <p
            className={`${
              l3 ? "bg-primary" : "bg-black"
            } rounded-full  h-2 w-2 bg-primary`}
          ></p>
          {l3}
        </div>
        <div
          style={styles.happyclientp1}
          className="flex gap-2 items-center 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] ml-0"
        >
          <p
            className={`${
              l4 ? "bg-primary" : "bg-black"
            } rounded-full  h-2 w-2 bg-primary`}
          ></p>
          {l4}
        </div>
        <div
          style={styles.happyclientp1}
          className="flex gap-2 items-center 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] ml-0"
        >
          <p
            className={`${
              l5 ? "bg-primary" : "bg-black"
            } rounded-full  h-2 w-2 bg-primary`}
          ></p>
          {l5}
        </div>
        <div
          style={styles.happyclientp1}
          className="flex gap-2 items-center 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] ml-0"
        >
          <p
            className={`${
              l6 ? "bg-primary" : "bg-black"
            } rounded-full  h-2 w-2 bg-primary`}
          ></p>
          {l6}
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanningComp;
