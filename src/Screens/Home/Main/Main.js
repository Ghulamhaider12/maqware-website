import React from "react";
import { styles } from "../../../Utils/styles/styles";
import OurExpertise from "../Our Expertise/ourExpertise";
import VideoSection from "../VideoSection/VideoSection";
import OurPortfolioSection from "../Our Portfolio Section/OurPortfolioSection";
import OurProgressReport from "../Our Progress Report/OurProgressReport";
import OurHappyClient from "../OurHappyClient/HappyClient";
import ContactSection from "../ContactSection/ContactSection";
import OurToolsAndTechSection from "../OurToolsAndTechSection/OurToolsAndTechSection";
import OurProcessNewSection from "../OurProcessSection/OurProcessNewSection";

const Main = () => {
  return (
    <div style={styles.mainbg} className="flex flex-col overflow-x-hidden ">
      <VideoSection />
      <div className="flex flex-col justify-center items-center">
        <OurExpertise />
        <OurToolsAndTechSection />
        {/* <OurProcessSection /> */}
        <OurProcessNewSection />
        <OurPortfolioSection />
        <OurProgressReport />
        <OurHappyClient />
        <ContactSection />
      </div>
    </div>
  );
};

export default Main;
