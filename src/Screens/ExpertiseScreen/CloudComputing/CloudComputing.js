import React from "react";
import ContactSection from "../../Home/ContactSection/ContactSection";
import Accessibility from "./Accessibility/Accessibility";
import CloudServices from "./CloudServices/CloudServices";
import CloudWorking from "./CloudWorking/CloudWorking";

const CloudComputing = () => {
  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      <Accessibility />
      <CloudServices />
      <CloudWorking />
      <ContactSection />
    </div>
  );
};

export default CloudComputing;
