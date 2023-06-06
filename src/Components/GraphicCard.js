const GraphicCard = () => {
  return (
    <div className='w-[80%]'>
      <span
        className='relative top-[4rem] right-[2rem]  bg-[#262626] text-white px-[10px] py-[8px] font-bold text-[1.4rem]'
        style={{ borderRadius: "50%" }}
      >
        01
      </span>
      <div className='p-3 flex flex-col gap-1 border-[2px] border-white rounded-2xl  h-auto'>
        <p className='text-[#BCBCBC] font-bold'>
          Collecting Project Information
        </p>
        <p className='text-[#BCBCBC]'>
          The graphic designer collect project related information like, target
          audience, message, dimensions, deadline, etc., from the client so they
          can refer to them throughout the project. Researching competitors or
          people in the same industry is also part of perfect a graphic design
          project.
        </p>
      </div>
    </div>
  );
};
export default GraphicCard;
