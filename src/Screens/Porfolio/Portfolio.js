import React from "react";
import ContactSection from "../Home/ContactSection/ContactSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden">
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
