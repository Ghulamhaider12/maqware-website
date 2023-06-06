import React from "react";
import assetImages from "../../../Assets/images/image";
import { styles } from "../../../Utils/styles/styles";
import BenefitSectionComp from "./BenefitSectionComp";

const BenefitsSection = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[1440px] w-[90%] mx-auto">
      <p
        style={styles.portfolio_btn}
        className="2xl:text-[28px] xl:text-[26px] lg:text-[24px] md:text-[20px] py-10"
      >
        At Maqware Solutions, we passionately strive to learn and improve—not
        only as a company, but also as individuals. We aim to create an
        environment where skills can be polished and where everyone is provided
        with ample time to try and experiment with new things.
      </p>
      <div className="grid-cols-3 grid-rows-1 grid gap-2 ">
        <h1
          className="xl:text-[2.2rem] lg:text-[1.8rem] text-[1.7rem] 2xl:text-[2.5rem] "
          style={styles.caseStudyCircle}
        >
          Benefits <br />
          we provide
        </h1>
        <BenefitSectionComp
          img={assetImages.healthcare}
          text={"Medical Allowance"}
        />
        <BenefitSectionComp
          img={assetImages.maternity}
          text={"Maternity Leaves"}
        />
      </div>
      <div className="grid-cols-3 grid-rows-1 grid gap-2 ">
        <BenefitSectionComp
          img={assetImages.Trip}
          text={"Recreational Trips"}
        />
        <BenefitSectionComp img={assetImages.paidLeaves} text={"Paid Leaves"} />
        <BenefitSectionComp
          img={assetImages.providentFund}
          text={"Provident Fund"}
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
