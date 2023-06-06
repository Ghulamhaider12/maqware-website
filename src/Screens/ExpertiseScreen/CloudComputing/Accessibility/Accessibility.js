import React from "react";
import assetImages from "../../../../Assets/images/image";
import DoubleTextWithImg from "../../../../Components/DoubleTextWithImg";

const Accessibility = () => {
  return (
    <div className="">
      <div>
        <DoubleTextWithImg
          title1="Augment Accessibility"
          title2="with Cloud services"
          desc1="Obtain the optimal combination of "
          desc2="performance and operating expenses "
          desc3="for your unique company goals."
          img={assetImages.CloudCompBg}
        />
      </div>
      <div className="max-w-[1420px] w-[90%] mx-auto text-[#BCBCBC] font-[400] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] xl:leading-10">
        <p>
          Maqware Solutions builds platforms, integrates, deploys, and optimizes
          your applications on AWS, Azure, and Google Cloud utilizing DevOps
          services. We work with all cloud deployment models, including public,
          private, and hybrid clouds, and makes sure the provision of the
          optimal mix of cost-effectiveness and control over your resources and
          data.
        </p>
      </div>
    </div>
  );
};
export default Accessibility;
