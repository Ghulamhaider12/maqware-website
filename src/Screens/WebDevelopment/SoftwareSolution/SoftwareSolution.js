import assetImages from "../../../Assets/images/image";
import DoubleTextWithImg from "../../../Components/DoubleTextWithImg";

const SoftwareSolution = () => {
  return (
    <div>
      <div>
        <DoubleTextWithImg
          title1="Simple yet Practical Software"
          title2=" Solutions for your Business Needs"
          desc1="We are your ultimate one-stop"
          desc2="solution!"
          img={assetImages.web}
        />
      </div>
      <div className="mx-[45px] lg:mx-[55px] xl:mx-[100px] 2xl:mx-[250px] text-[#BCBCBC] font-[400]  md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem]">
        <p>
          Whether you want to start your product from scratch, or looking for
          experts to improve your existing one, contact us to get the most
          user-oriented solution. Let’s talk to know more about the
          developmental life cycle or any particular phase of your product.
        </p>
      </div>
    </div>
  );
};
export default SoftwareSolution;
