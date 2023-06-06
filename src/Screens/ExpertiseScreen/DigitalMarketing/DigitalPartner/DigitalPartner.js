import React from "react";
import assetImages from "../../../../Assets/images/image";
import DoubleTextWithImg from "../../../../Components/DoubleTextWithImg";

const DigitalPartner = () => {
  return (
    <div className="">
      <div>
        <DoubleTextWithImg
          title1="We are your partners for innovative and"
          title2="impactful Digital Marketing Solutions "
          desc1="Look no further;"
          desc2="you've come to the right spot!"
          img={assetImages.digitalMarketingbg}
        />
      </div>
      <div className="max-w-[1440px] w-[90%] mx-auto text-[#BCBCBC] font-[400] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] xl:leading-10">
        <p>
          Aiming to increase your social media presence and generate more
          business? Our digital marketing gurus brilliantly strategize
          platform-specific campaigns, leveraging features of each social media
          platform and serving optimized content pieces that target audiences
          love to consume and that convert.
        </p>
      </div>
    </div>
  );
};

export default DigitalPartner;
