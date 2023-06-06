import React from "react";
import ContactSection from "../Home/ContactSection/ContactSection";
import BeleiveSection from "./BeleiveSection/BeleiveSection";
import CreateSoftwareSection from "./CreateSoftwareSection/CreateSoftwareSection";
import ExplorePictureSection from "./ExplorePicture/ExplorePictureSection";
import OurLeaderSection from "./OurLeaderSection/OurLeaderSection";

const AboutUs = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <CreateSoftwareSection />
      <OurLeaderSection />
      <ExplorePictureSection />
      <BeleiveSection />
      <ContactSection />
    </div>
  );
};

export default AboutUs;
