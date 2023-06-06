import DesignExperience from "./DesignExperience/DesignExperience";
import StepsUiUxDesign from "./StepsDesign/StepsDesign";
import ContactSection from "../Home/ContactSection/ContactSection";

const UiUxDesign = () => {
  return (
    <div className="overflow-x-hidden">
      <DesignExperience />
      <StepsUiUxDesign />
      <ContactSection />
    </div>
  );
};
export default UiUxDesign;
