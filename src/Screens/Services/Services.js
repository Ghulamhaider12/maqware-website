import React from "react";
import ContactSection from "../Home/ContactSection/ContactSection";
import InnvoatingIndustries from "./InnvoatingIndustries/InnvoatingIndustries";
import NewServiceComponent from "./NewServicesPage/NewServiceComponent";
// import LastingRelationship from './LastingRelationship/LastingRelationship'
// import OurServices from './OurServices/OurServices'
// import WebDevelopment from './WebDevelpment/WebDevelopment'

const Services = () => {
  return (
    <div className="flex flex-col gap-10 2xl:gap-32">
      <InnvoatingIndustries />
      <NewServiceComponent />
      <div className=" xl:mt-0">
        <ContactSection />
      </div>
      {/* <LastingRelationship/> */}
      {/* <WebDevelopment/> */}
      {/* <OurServices/> */}
    </div>
  );
};

export default Services;
