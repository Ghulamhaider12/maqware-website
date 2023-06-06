import assetImages from "../../../Assets/images/image";
import DoubleTextWithImg from "../../../Components/DoubleTextWithImg";

const GoodDesign = () => {
  return (
    <div>
      <div>
        <DoubleTextWithImg
          title1='Good design adds value'
          title2='faster than it adds costs'
          desc1='Graphic Design'
          img={assetImages.graphic}
        />
      </div>
      <div className='mx-[45px] lg:mx-[55px] xl:mx-[100px] 2xl:mx-[250px] text-[#BCBCBC] font-[400]  md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem]'>
        <p>
          It’s hard to get noticed in a world of visual noise! While businesses
          increasingly use videos and images to attract customers, the stunning
          visuals will make you stand out from the rest.
          <br /> We provide graphic design services to help you create the
          perfect blend of creativity. Our designers have years of expertise in
          creating videos, infographics, 3D animations, logos, and much more.
          You can rely on our expertise to ensure your visuals capture your
          audience’s attention.
        </p>
      </div>
    </div>
  );
};
export default GoodDesign;
