import assetIcons from "../../../Assets/icons/Icons";

const StepsUiUxDesign = () => {
  return (
    <div>
      <div>
        <div
          className='text-white text-[2rem] font-bold my-4'
          style={{ display: "flex", gap: "3px", justifyContent: "center" }}
        >
          {"<"}
          <p>Steps for Stunning UI/UX Design</p>
          <span className='text-primary'>|</span>
          {">"}
        </div>
      </div>
      <div className='bg-[#262626] text-[#BCBCBC] md:h-[100vh] lg:h-[60vh] xl:h-[120vh] 2xl:h-[100vh] flex-col flex items-center justify-center '>
        <div className='lg:mx-[5px] md:mx-[10px] xl:mx-[70px] 2xl:mx-[250px] grid grid-cols-3'>
          {/* left Side */}
          <div className='  xl:h-[60vh] md:h-[30vh] lg:h-[30vh] flex flex-col 2xl:justify-around xl:justify-around lg:justify-between md:justify-between  lg:gap-[5rem] xl:gap-[4rem] 2xl:gap-[5.5rem]'>
            <div className='flex justify-end items-center gap-3 relative 2xl:left-[9rem] xl:left-[8rem] lg:left-[10rem] md:left-[6.5rem]'>
              <div className='text-right flex-1'>
                <p className='font-[600] text-[1rem]'>
                  Implementation & Launch
                </p>
                <p className='md:hidden lg:hidden xl:block 2xl:block'>
                  After the development phase, these are finally launched.
                </p>
              </div>
              <div>
                <img
                  src={assetIcons.circle}
                  alt='Lunch'
                  className='md:w-[40%] lg:w-[30%] xl:w-[60%]'
                />
              </div>
            </div>
            <div className='flex justify-end items-center gap-3 relative 2xl:left-[3.3rem] xl:left-[3.5rem] lg:left-[6.5rem] md:left-[6.5rem] md:top-1 lg:top-1 xl:top-0 2xl:top-0'>
              <div className='text-right flex-1'>
                <p className='font-[600] text-[1rem]'>Creative Testing</p>
                <p className='md:hidden lg:hidden xl:block 2xl:block'>
                  Prototypes are then tested on both sides by various users and
                  revisions are made before these are shared will the engineers
                  for development process.
                </p>
              </div>
              <div>
                <img
                  src={assetIcons.circle}
                  alt='Lunch'
                  className='md:w-[30%] lg:w-[30%] xl:w-[60%]'
                />
              </div>
            </div>
            <div className='flex justify-end items-center gap-3 relative 2xl:left-[9rem] xl:left-[8rem] lg:left-[9.5rem] md:left-[8rem] '>
              <div className='text-right flex-1'>
                <p className='font-[600] text-[1rem]'>Prototyping</p>
                <p className='md:hidden lg:hidden xl:block 2xl:block'>
                  Designs are then prototyped to depict and experience what the
                  user side will experience.
                </p>
              </div>
              <div>
                <img
                  src={assetIcons.circle}
                  alt='Lunch'
                  className='md:w-[33%] lg:w-[32%] xl:w-[60%]'
                />
              </div>
            </div>
          </div>
          {/* Cente Image */}
          <div className=' flex items-center justify-center 2xl:mt-[4rem] xl:mt-[3rem] lg:mt-[2.2rem] md:mt-[2.2rem]'>
            <img src={assetIcons.center} alt='circle' width='100%' />
          </div>
          {/* Cente Image */}
          <div className='  xl:h-[60vh] md:h-[30vh] lg:h-[30vh] flex flex-col 2xl:justify-around xl:justify-around lg:justify-between md:justify-between  lg:gap-[5rem] xl:gap-[4rem] 2xl:gap-[5.5rem]'>
            {/* Right Side */}
            <div className='flex justify-start items-center gap-3 relative 2xl:right-[5rem] xl:right-[3.7rem] lg:right-[2.5rem] md:right-7 xl:-mt-[1rem] lg:-mt-0 2xl:-mt-0'>
              <div>
                <img
                  src={assetIcons.circle}
                  alt='Lunch'
                  className='md:w-[29%] lg:w-[30%] xl:w-[60%]'
                />
              </div>
              <div className='text-left flex-1 relative 2xl:right-[4rem] xl:right-[4rem] md:right-[7.5rem] lg:right-[7.5rem]'>
                <p className='font-[600] text-[1rem]'>User Research</p>
                <p className='md:hidden lg:hidden xl:block 2xl:block'>
                  Before our teams begin, we first learn about the brand, the
                  client, and, most importantly, the end users. After that, we
                  conduct a competitor analysis.
                </p>
              </div>
            </div>
            <div className='flex justify-start items-center gap-3 relative xl:left-[0.8rem] 2xl:left-[1rem] lg:left-3 md:left-3 xl:-mt-2 2xl:-mt-0'>
              <div>
                <img
                  src={assetIcons.circle}
                  alt='Lunch'
                  className='md:w-[30%] lg:w-[30%] xl:w-[60%]'
                />
              </div>
              <div className='text-left flex-1 relative 2xl:right-[4rem] xl:right-[4rem] lg:right-[7.5rem] md:right-[7.5rem]'>
                <p className='font-[600] text-[1rem]'>
                  Sketching & Story-boarding
                </p>
                <p className='md:hidden lg:hidden xl:block 2xl:block'>
                  Then comes the time to digitize the concepts. Wireframes are
                  designed and shared to define multiple screens and user flows
                </p>
              </div>
            </div>
            <div className='flex justify-start items-center gap-3 relative 2xl:right-[5rem] xl:right-[4rem] lg:right-[2rem] md:right-7'>
              <div>
                <img
                  src={assetIcons.circle}
                  alt='Lunch'
                  className='md:w-[35%] lg:w-[30%] xl:w-[60%]'
                />
              </div>
              <div className='text-left flex-1 relative 2xl:right-[4rem] xl:right-[4rem] md:right-[6rem] lg:right-[7.5rem]'>
                <p className='font-[600] text-[1rem]'>Wireframing</p>
                <p className='md:hidden lg:hidden xl:block 2xl:block'>
                  Then comes the time to digitize the concepts. Wireframes are
                  designed and shared to define multiple screens and user flows
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Box */}
        <div>
          <div className='flex justify-center flex-col items-center gap-3  relative xl:top-3 2xl:top-0 lg:top-3 md:top-2 '>
            <div className='flex items-center justify-center '>
              <img
                src={assetIcons.circle}
                alt='Lunch'
                className='md:w-[30%] lg:w-[35%] xl:w-[60%]'
              />
            </div>
            <div className='text-center'>
              <p className='font-[600] text-[1rem]'>Designing</p>
              <p className='md:hidden lg:hidden xl:block 2xl:block'>
                When client and ours, both teams are in line, the
                <br /> designs are created as per approved wireframes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepsUiUxDesign;
