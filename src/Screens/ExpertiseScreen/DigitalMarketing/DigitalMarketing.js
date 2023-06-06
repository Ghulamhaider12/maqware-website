import React from "react";
import ContactSection from "../../Home/ContactSection/ContactSection";
import DigitalPartner from "./DigitalPartner/DigitalPartner";
import HowWeWork from "./HowWeWork/HowWeWork";

const DigitalMarketing = () => {
  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      <DigitalPartner />
      <HowWeWork />
      <ContactSection />
    </div>
  );
};

export default DigitalMarketing;
