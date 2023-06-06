import ContactSection from "../Home/ContactSection/ContactSection";
import BackendDevelopment from "./BackendDevelopment/BackendDevelopment";
import FrontendDevelopment from "./FrontendDevelopment/FrontendDevelopment";
import SoftwareSolution from "./SoftwareSolution/SoftwareSolution";

const WebDevelopment = () => {
  return (
    <div className="overflow-x-hidden">
      <SoftwareSolution />
      <BackendDevelopment />
      <FrontendDevelopment />
      <ContactSection />
    </div>
  );
};
export default WebDevelopment;
