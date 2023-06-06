import assetIcons from "../../../Assets/icons/Icons";

const FrontendDevelopment = () => {
  return (
    <div className='pb-[5rem]'>
      <div className='mt-10  md:mx-[45px] lg:mx-[50px] xl:mx-[250px]'>
        <div
          className='text-white text-[2rem] font-bold my-4'
          style={{ display: "flex", gap: "3px", justifyContent: "center" }}
        >
          {"<"}
          <p>Frontend Development</p>
          <span className='text-primary'>|</span>
          {">"}
        </div>
        <div className='text-[#BCBCBC] text-center mx-3'>
          <p>
            Looks do matter!
            <br /> We often hear that first impression is the last impression.
            Debates can be made about whether this is correct or not, but first
            impressions do serve as hooks. And that is exactly what we strive
            for, we make the face of your product so stunning that the user
            stays. Our developers make sure that your product is adaptable to
            all screen sizes, is lightening fast in loading, and super easy to
            navigate.
          </p>
        </div>
      </div>
      <div className='bg-[#262626] h-[22vh] !w-[100%] mt-8'>
        <div
          className='xl:gap-[4rem] lg:gap-[4rem] md:gap-[3rem] justify-center h-[100%]'
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <img src={assetIcons.vuejs} alt='Vue js' width='8%' />
          <img src={assetIcons.angular} alt='Angular Js' width='5%' />
          <img src={assetIcons.js} alt='JaveScript' width='5%' />
          <img src={assetIcons.react} alt='React js' width='6%' />
        </div>
      </div>
    </div>
  );
};
export default FrontendDevelopment;
