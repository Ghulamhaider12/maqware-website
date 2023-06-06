import assetIcons from "../../../Assets/icons/Icons";

const BackendDevelopment = () => {
  return (
    <div>
      <div className='mt-10 mx-[45px] lg:mx-[55px] xl:mx-[250px]'>
        <div
          className='text-white text-[2rem] font-bold my-4'
          style={{ display: "flex", gap: "3px", justifyContent: "center" }}
        >
          {"<"}
          <p>Backend Development</p>
          <span className='text-primary'>|</span>
          {">"}
        </div>
        <div className='text-[#BCBCBC] text-center mx-3'>
          <p>
            Creating stunning looks aren't the only thing we ace at. Our experts
            discuss and decide which stack best suits your product so it can
            work synchronously in phones, tabs and desktops. We provide a range
            of services that enhance the functionality and performance of
            preexisting backend systems by developing bespoke back-end layers,
            optimizing current backend systems, and transitioning to the cloud.
          </p>
        </div>
      </div>
      <div className='bg-[#262626] h-[22vh] !w-[100%] mt-8'>
        <div
          className='xl:gap-[4rem] lg:gap-[4rem] md:gap-[3rem] justify-center h-[100%]'
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <img src={assetIcons.python} alt='Python' width='5%' />
          <img src={assetIcons.mysql} alt='My Sql' width='6%' />
          <img src={assetIcons.node} alt='Node Js' width='6%' />
          <img src={assetIcons.laravel} alt='Laravel' width='5%' />
          <img src={assetIcons.php} alt='PHP' width='6%' />
          <img src={assetIcons.express} alt='Express' width='7%' />
          <img src={assetIcons.ruby} alt='Ruby' width='5%' />
          <img src={assetIcons.mongo} alt='Mongo' width='7%' />
        </div>
      </div>
    </div>
  );
};
export default BackendDevelopment;
