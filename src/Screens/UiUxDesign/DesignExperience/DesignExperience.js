import assetImages from "../../../Assets/images/image";
import DoubleTextWithImg from "../../../Components/DoubleTextWithImg";

const DesignExperience = () => {
  return (
    <div>
      <div>
        <DoubleTextWithImg
          title1='We Design'
          title2='Experiences, not Interfaces'
          desc1='Our inspiration leads'
          desc2='to bring emotions to reason.'
          img={assetImages.uiux}
        />
      </div>
      <div className='mx-[45px] lg:mx-[55px] xl:mx-[100px] 2xl:mx-[250px] text-[#BCBCBC] font-[400]  md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem]'>
        <p>
          We combine empathy with cognitive science to create usable and
          compelling products. We rely on a human-centered approach to build a
          magnificent User Interface and a smooth User Experience.
          <br /> Our team of exceptionally imaginative UI/UX designers
          understands the brand for what it is, the client, and the end user's
          behavior to craft delightful experiences that stay with the users.
        </p>
      </div>
    </div>
  );
};
export default DesignExperience;
