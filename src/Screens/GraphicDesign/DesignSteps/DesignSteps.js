import HalfCircle from "../../../Components/HalfCircle";

const DesignSteps = () => {
  return (
    <div className="mt-10 mx-[45px] lg:mx-[10px]  xl:ml-[20px] xl:mr-[70px] 2xl:mx-[180px] text-white">
      <div className=" h-[100vh] flex">
        <div className=" w-1/3 flex flex-col justify-center items-center">
          <div className="absolute flex items-center justify-center">
            <HalfCircle className="md:left-[4rem] lg:left-[7rem] xl:left-[7rem] 2xl:left-[7rem] " />{" "}
          </div>
          <div>
            <div className="p-2 flex flex-col justify-center items-center gap-2">
              <p className="text-[1.6rem] md:text-[1.2rem] font-bold leading-[30px] md:leading-[20px]">
                Steps for Stunning
                <br /> Graphic Design
              </p>
              <p className="md:w-[100%] lg:!w-[66%] xl:!w-[66%] 2xl:!w-[66%]  text-justify">
                With every project, graphic designers go through the phases,
                again and again, to make sure the final content pieces are in
                line with the audience's preferences and brand projection.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-2/3 flex flex-col gap-5">
          {/* <GraphicCard /> */}
          {/* <GraphicCard /> */}
          {/* <GraphicCard /> */}
          {/* <GraphicCard /> */}
          {/* <GraphicCard /> */}
        </div>
      </div>
    </div>
  );
};
export default DesignSteps;
