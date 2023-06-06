import React from "react";
import { styles } from "../../../Utils/styles/styles";

const UserJourneyComp = ({ heading, list1, list2, list3 }) => {
  return (
    <div className="flex w-full gap-5 lg:my-4 my-2">
      <h1
        className="w-1/4 text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] ml-2"
        style={styles.process_heading}
      >
        {heading}
      </h1>
      <p
        className="w-1/4 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] "
        style={styles.portfolio_btn}
      >
        {list1}
      </p>
      <p
        className="w-1/4 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] "
        style={styles.portfolio_btn}
      >
        {list2}
      </p>
      <p
        className="w-1/4 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[10px] "
        style={styles.portfolio_btn}
      >
        {list3}
      </p>
    </div>
  );
};

export default UserJourneyComp;
