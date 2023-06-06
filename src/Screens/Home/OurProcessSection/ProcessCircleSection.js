import React from "react";
import assetGifs from "../../../Assets/Gifs/Gifs";
import ProcessCircle from "../../../Components/ProcessCircle";
import { expertisehead_protbfoliobtn } from "../../../Utils/styles/color";

const ProcessCircleSection = () => {
  return (
    <div className=" md:h-[240px] xl:h-[300px] pt-0 lg:pt-6 ">
      <div className="">
        {/******************* Circle Area ****************************/}
        <div className=" flex flex-col xl:gap-[2rem] lg:gap-[1rem]  2xl:gap-10  md:gap-[2rem]">
          <div className="flex xl:gap-64 lg:gap-40 2xl:gap-80 xl:ml-8 lg:ml-0 2xl:ml-0 md:ml-0 md:gap-32">
            <div className="relative">
              <ProcessCircle img={assetGifs.RequirementGathering} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 absolute xl:top-2 2xl:top-1 xl:left-3 lg:top-2 lg:left-3 md:top-5 md:left-3 2xl:left-4 "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ---------
              </span>
            </div>
            <div className="relative ">
              <ProcessCircle img={assetGifs.Design} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 absolute xl:top-2 2xl:top-1  xl:left-3 2xl:left-4 lg:top-2 lg:left-3 z-20  md:top-5 md:left-3  "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ---------
              </span>
              <span
                className=" transform 2xl:-rotate-[35deg] absolute md:-rotate-[40deg] md:top-[6.5rem] md:-left-[5rem] md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] xl:top-[6.8rem] xl:-left-[7.5rem] xl:-rotate-[36deg] 2xl:top-[7rem] 2xl:-left-[10rem] lg:top-[5.5rem] lg:-left-[6.5rem] lg:-rotate-[40deg] "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ----------------------------------
              </span>
            </div>
            <div className="relative ">
              <ProcessCircle img={assetGifs.Testing} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 absolute xl:top-2 2xl:top-1 xl:left-3 lg:top-2 lg:left-3 2xl:left-4 z-20 md:top-5 md:left-3 "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ---------
              </span>
              <span
                className=" transform 2xl:-rotate-[35deg] absolute md:-rotate-[40deg] md:top-[6.5rem] md:-left-[5rem] md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]  xl:top-[6.5rem] xl:-left-[8rem] xl:-rotate-[35deg] 2xl:top-[7rem]  2xl:-left-[10rem] lg:top-[6rem] lg:-left-[6rem]  lg:-rotate-[40deg] "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ----------------------------------
              </span>
            </div>
            <div className="relative">
              <ProcessCircle img={assetGifs.Maintenance} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 absolute xl:top-2 2xl:top-1 xl:left-3 lg:top-2 lg:left-3 2xl:left-4 md:top-5 md:left-3 "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ---------
              </span>
              <span
                className=" transform 2xl:-rotate-[35deg] absolute md:-rotate-[40deg] md:top-[6.5rem] md:-left-[5rem] md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] xl:top-[7rem] xl:-left-[9.5rem] xl:-rotate-[33deg] 2xl:top-[7.4rem] 2xl:-left-[10rem] lg:top-[6.6rem] lg:-left-[5rem] lg:-rotate-[42deg]"
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ----------------------------------
              </span>
            </div>
          </div>

          <div className="flex xl:gap-60 lg:gap-[178px] 2xl:gap-80 justify-center md:gap-32">
            <div className="relative md:-ml-0 xl:ml-0">
              <ProcessCircle img={assetGifs.Analysis} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 2xl:-bottom-[4.9rem] absolute xl:-bottom-[4.2rem] xl:left-5 lg:left-4 2xl:left-4 lg:-bottom-[4.2rem] md:-bottom-14 md:left-3 "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                --------
              </span>
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform 2xl:rotate-[35deg] absolute 2xl:bottom-[2.5rem] 2xl:-left-36 md:rotate-[37deg] md:bottom-[1.5rem] md:-left-[5rem] lg:rotate-[40deg] lg:bottom-[0rem] lg:-left-[5.5rem] xl:bottom-[2rem] xl:-left-[7.5rem] xl:rotate-[35deg] "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ----------------------------------
              </span>
            </div>
            <div className="relative ">
              <ProcessCircle img={assetGifs.Development} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 absolute 2xl:-bottom-[4.9rem] xl:-bottom-[4.2rem] xl:left-5 lg:left-4 2xl:left-4  lg:-bottom-[4.2rem] md:-bottom-14 md:left-3 "
                style={{ color: expertisehead_protbfoliobtn }}
              >
                --------
              </span>
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform 2xl:rotate-[35deg] absolute 2xl:bottom-[2.5rem] 2xl:-left-36 md:rotate-[40deg] md:bottom-[1.5rem] md:-left-[5rem] xl:bottom-[2.5rem] xl:-left-[7.4rem] xl:rotate-[37deg] lg:bottom-[0.3rem] lg:-left-24 lg:rotate-[40deg]"
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ----------------------------------
              </span>
            </div>
            <div className="relative ">
              <ProcessCircle img={assetGifs.Deployment} />
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform rotate-90 absolute 2xl:-bottom-[4.9rem] xl:-bottom-[4.2rem] xl:left-5 lg:left-4 2xl:left-4 lg:-bottom-[4.2rem] md:-bottom-14 md:left-3"
                style={{ color: expertisehead_protbfoliobtn }}
              >
                --------
              </span>
              <span
                className="md:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] transform 2xl:rotate-[35deg] absolute 2xl:bottom-[2.5rem] 2xl:-left-36 md:rotate-[40deg] md:bottom-[1.5rem] md:-left-[5rem] xl:bottom-[2.9rem] xl:-left-[7.4rem] xl:rotate-[42deg] lg:-bottom-[0.3rem] lg:-left-[6.5rem] lg:rotate-[35deg]"
                style={{ color: expertisehead_protbfoliobtn }}
              >
                ----------------------------------
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCircleSection;
