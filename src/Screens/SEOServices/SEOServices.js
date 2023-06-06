import ContactSection from "../Home/ContactSection/ContactSection";
import BuisnessSearch from "./BuisnesSearch/BuisnessSearch";
import TakeTop from "./TakeTop/TakeTop";
import TimeLine from "./TimeLine/TimeLine";

const SEOServices = () => {
  return (
    <div className="overflow-x-hidden">
      <BuisnessSearch />
      <TakeTop />
      <TimeLine />
      <ContactSection />
    </div>
  );
};
export default SEOServices;
