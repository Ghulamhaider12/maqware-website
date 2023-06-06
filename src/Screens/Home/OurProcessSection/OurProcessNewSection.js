import assetGifs from "../../../Assets/Gifs/Gifs";
import assetIcons from "../../../Assets/icons/Icons";
import { AnimationTag } from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";
import data from "./data";

const OurProcessNewSection = () => {
  return (
    <div className="">
      <div className="my-10">
        <AnimationTag>Our Process</AnimationTag>
      </div>
      <div className="bg-[#262626] text-[#BCBCBC] pt-[5rem] min-h-max-[100vh] flex-col flex items-center justify-center ">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:mx-[5px] md:mx-[10px] xl:mx-[20px] 2xl:mx-[200px] grid grid-cols-3">
            {/* left Side */}
            <div className="2xl:h-[550px] xl:h-[500px] md:h-[250px] lg:h-[350px]  flex flex-col justify-between">
              <div className="flex justify-end items-center  gap-3  2xl:-mr-[150px] 2xl:-mt-[20px] xl:-mr-[145px]  xl:-mt-[50px] lg:-mr-[168px] lg:-mt-[33px] md:-mr-[10rem] md:-mt-[20px]">
                <div className="text-right flex-1">
                  <p
                    style={styles.cardtext_heading}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                  >
                    {data[1].title}
                  </p>
                  <p
                    className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px]"
                    style={styles.cardtxt_happyclient_formtxt}
                  >
                    {data[1].description}
                  </p>
                </div>
                <div>
                  <img
                    src={assetIcons.circle}
                    alt="Lunch"
                    className="md:w-[30%] lg:w-[30%] xl:w-[60%] z-0"
                  />
                  <img
                    src={assetGifs.requirement}
                    alt="Requirement"
                    className="md:w-[2%] lg:w-[2%] xl:w-[3%] 2xl:w-[2.3%] absolute 2xl:-mt-[74px] 2xl:ml-[28px]  xl:ml-8 xl:-mt-[72px] lg:-mt-[37px] lg:ml-4 md:-mt-[34px] md:ml-[18px]"
                  />
                </div>
              </div>
              <div className="flex justify-end items-center gap-3 xl:-mr-[75px] xl:-mt-[0px] lg:-mr-[122px] lg:-mt-[0px] md:-mr-[115px] md:-mt-[10px]">
                <div className="text-right flex-1">
                  <p
                    style={styles.cardtext_heading}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                  >
                    {data[2].title}
                  </p>
                  <p
                    className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px]"
                    style={styles.cardtxt_happyclient_formtxt}
                  >
                    {data[2].description}
                  </p>
                </div>
                <div>
                  <img
                    src={assetIcons.circle}
                    alt="Lunch"
                    className="md:w-[30%] lg:w-[30%] xl:w-[60%]"
                  />
                  <img
                    src={assetGifs.design}
                    alt="Requirement"
                    className="md:w-[2%] lg:w-[2%] xl:w-[3%] 2xl:w-[2.7%] absolute 2xl:-mt-[74px] 2xl:ml-[25px]  xl:ml-[28px] xl:-mt-[70px] lg:-mt-[34px] lg:ml-[0.95rem] md:-mt-[34px] md:ml-[18px]"
                  />
                </div>
              </div>
              <div className="flex justify-end items-center gap-3 2xl:-mr-[170px] 2xl:mb-[15px] xl:-mr-[145px] xl:-mb-[8px] lg:-mr-[170px] lg:-mb-[10px] md:-mr-[170px] md:-mb-[0px]">
                <div className="text-right flex-1">
                  <p
                    style={styles.cardtext_heading}
                    className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                  >
                    {data[3].title}
                  </p>
                  <p
                    className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px]"
                    style={styles.cardtxt_happyclient_formtxt}
                  >
                    {data[3].description}
                  </p>
                </div>
                <div>
                  <img
                    src={assetIcons.circle}
                    alt="Lunch"
                    className="md:w-[30%] lg:w-[32%] xl:w-[60%]"
                  />
                  <img
                    src={assetGifs.testing}
                    alt="Requirement"
                    className="md:w-[3%] lg:w-[3%] xl:w-[4%] 2xl:w-[2.8%] absolute 2xl:-mt-[70px] 2xl:ml-[24px]  xl:ml-[24px] xl:-mt-[72px] lg:-mt-[37px] lg:ml-[12px] md:-mt-[34px] md:ml-[15px]"
                  />
                </div>
              </div>
            </div>
            {/* Cente Image */}
            <div className=" flex items-center justify-center ">
              <img src={assetIcons.center} alt="circle" width="90%" />
            </div>
            {/* Right Side */}
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-col justify-between  2xl:h-[550px]  xl:h-[500px] md:h-[250px] lg:h-[350px] ">
                <div className="flex justify-start items-center flex-row-reverse gap-3  2xl:-ml-[80px] 2xl:-mt-[20px] xl:-ml-[90px]  xl:-mt-[50px] lg:-ml-[50px] lg:-mt-[33px] md:-ml-[165px] md:-mt-[20px]">
                  <div className="text-left flex-1 2xl:-ml-[50px] xl:-ml-[65px]  lg:-ml-[120px] md:-ml-[120px] ">
                    <p
                      style={styles.cardtext_heading}
                      className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                    >
                      {data[4].title}
                    </p>
                    <p
                      className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px]"
                      style={styles.cardtxt_happyclient_formtxt}
                    >
                      {data[4].description}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={assetIcons.circle}
                      alt="Lunch"
                      className="md:w-[30%] lg:w-[30%] xl:w-[60%]"
                    />
                    <img
                      src={assetGifs.maintenance}
                      alt="Requirement"
                      className="md:w-[3%] lg:w-[3%] xl:w-[4%] 2xl:w-[2.8%] absolute 2xl:-mt-[78px] 2xl:ml-[25px]  xl:ml-[24px] xl:-mt-[78px] lg:-mt-[40px] lg:ml-[11px] md:-mt-[38px] md:ml-[15px]"
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center flex-row-reverse gap-3  2xl:-ml-[0px] 2xl:-mt-[25px] xl:-ml-[10px] xl:-mt-[30px] lg:-ml-[0px] lg:-mt-[20px] md:-ml-[120px] md:-mt-[10px]">
                  <div className="text-left flex-1 2xl:-ml-[50px] xl:-ml-[65px]  lg:-ml-[120px] md:-ml-[120px]">
                    <p
                      style={styles.cardtext_heading}
                      className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                    >
                      {data[5].title}
                    </p>
                    <p
                      className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px]"
                      style={styles.cardtxt_happyclient_formtxt}
                    >
                      {data[5].description}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={assetIcons.circle}
                      alt="Lunch"
                      className="md:w-[30%] lg:w-[30%] xl:w-[60%]"
                    />
                    <img
                      src={assetGifs.analysis}
                      alt="Requirement"
                      className="md:w-[2%] lg:w-[2.5%] xl:w-[3%] 2xl:w-[2.3%] absolute 2xl:-mt-[63px] 2xl:ml-[28px]  xl:ml-[28px] xl:-mt-[65px] lg:-mt-[32px] lg:ml-[12px] md:-mt-[30px] md:ml-[15px]"
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center flex-row-reverse gap-3 2xl:-ml-[100px] 2xl:mb-[0px] xl:-ml-[90px]  xl:-mb-[10px] lg:-ml-[50px] lg:-mt-[33px] md:-ml-[170px] md:-mb-[0px]">
                  <div className="text-left flex-1 2xl:-ml-[70px] xl:-ml-[65px]  lg:-ml-[120px] md:-ml-[120px]">
                    <p
                      style={styles.cardtext_heading}
                      className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                    >
                      {data[6].title}
                    </p>
                    <p
                      className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px]"
                      style={styles.cardtxt_happyclient_formtxt}
                    >
                      {data[6].description}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={assetIcons.circle}
                      alt="Lunch"
                      className="md:w-[30%] lg:w-[30%] xl:w-[60%]"
                    />
                    <img
                      src={assetGifs.development}
                      alt="Requirement"
                      className="md:w-[2%] lg:w-[2.5%] xl:w-[3%] 2xl:w-[1.8%] absolute 2xl:-mt-[70px] 2xl:ml-[34px]  xl:ml-[30px] xl:-mt-[72px] lg:-mt-[38px] lg:ml-[12px] md:-mt-[33px] md:ml-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Box */}
          <div className="flex items-center justify-center mt-2 lg:mt-4 xl:mt-4 2xl:-mt-16 dxl:mt-0">
            <div className="flex justify-center flex-col items-center gap-3 pb-10 2xl:mt-[1rem] xl:-mt-[20px] lg:-mt-[20px]">
              <div className="flex items-center justify-center ">
                <img
                  src={assetIcons.circle}
                  alt="Lunch"
                  className="md:w-[30%] lg:w-[35%] xl:w-[60%]"
                />
                <img
                  src={assetGifs.deployment}
                  alt="deployment"
                  className="md:w-[2%] lg:w-[2.5%] xl:w-[3%] 2xl:w-[1.8%] absolute 2xl:-mt-[3px] 2xl:-ml-[1px]  xl:ml-[0px] xl:-mt-[0px] lg:-mt-[0px] lg:ml-[0px] md:-mt-[0px] md:ml-[0px]"
                />
              </div>
              <div className="text-center flex items-center justify-center flex-col gap-2">
                <p
                  style={styles.cardtext_heading}
                  className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px]"
                >
                  {data[7].title}
                </p>
                <p
                  className="md:hidden lg:block xl:block 2xl:block md:text-[11px] lg:text-[13.4px] xl:text-[16px] 2xl:text-[18px] w-1/3"
                  style={styles.cardtxt_happyclient_formtxt}
                >
                  {data[7].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurProcessNewSection;
