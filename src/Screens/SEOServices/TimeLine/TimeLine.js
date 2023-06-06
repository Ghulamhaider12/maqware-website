const TimeLine = () => {
  return (
    <div className='text-[#BCBCBC]   mt-10 mx-[45px] lg:mx-[70px] xl:mx-[180px] 2xl:mx-[200px] flex flex-col justify-center items-center'>
      <div
        className={`flex items-center lg:justify-center 2xl:justify-center xl:justify-center xl:gap-[2rem] 2xl:gap-[4rem] md:justify-center md:gap-8 lg:gap-[3rem] mb-10 `}
      >
        <div className='text-center w-[30%] flex flex-col  items-center'>
          <p className='text-[1rem] leading-[2rem] font-bold '>
            On-Page Optimization
          </p>
          <p className=''>
            We optimize your website’s content and structure to ensure it is
            fully optimized for the targeted keyword
          </p>
          <p className='transform rotate-90 mt-10'>----------</p>
        </div>
        <div className='text-center w-[30%] flex flex-col  items-center'>
          <p className='text-[1rem] leading-[2rem] font-bold'>
            Tracking & Analysis
          </p>
          <p className=''>
            We use advanced tracking and analysis tools to monitor the
            performance of your website and identify areas for improvement.
          </p>
          <p className='transform rotate-90 mt-10'>----------</p>
        </div>
      </div>
      <div className='border-t-4 border-[#55C5CE]  rounded-full md:w-[75%] lg:w-[75%] xl:w-[70%]'>
        <div className='flex justify-between -mt-[15px] text-white'>
          <span className='flex items-center justify-center bg-[#55C5CE] p-1 pr-3 pl-3 rounded-full'>
            1
          </span>
          <span className='flex items-center justify-center bg-[#55C5CE] p-1 pr-3 pl-3 rounded-full'>
            2
          </span>
          <span className='flex items-center justify-center bg-[#55C5CE] p-1 pr-3 pl-3 rounded-full'>
            3
          </span>
          <span className='flex items-center justify-center bg-[#55C5CE] p-1 pr-3 pl-3 rounded-full'>
            4
          </span>
          <span className='flex items-center justify-center bg-[#55C5CE] p-1 pr-3 pl-3 rounded-full'>
            5
          </span>
        </div>
      </div>
      <div className='flex items-center lg:justify-between  xl:justify-between xl:gap-10 md:justify-between mb-10'>
        <div className='text-center w-[30%] flex flex-col  items-center md:ml-0 lg:-ml-1 xl:ml-4'>
          <p className='transform rotate-90 my-8'>----------</p>
          <p className='text-[1rem] leading-[2rem] font-bold '>
            Keyword Research
          </p>
          <p className=''>
            We conduct research for the best keywords and key phrases that your
            ideal customer/client is searching online for in the target areas.
          </p>
        </div>
        <div className='text-center w-[30%] flex flex-col  items-center'>
          <p className='transform rotate-90 my-8'>----------</p>

          <p className='text-[1rem] leading-[2rem] font-bold'>
            Off-Page Optimization
          </p>
          <p className=''>
            We work on building high-quality backlinks from reputable websites
            to improve your website’s authority and ranking in search results.
          </p>
        </div>
        <div className='text-center w-[30%] flex flex-col  items-center md:mr-0 lg:-mr-[8px] xl:mr-4'>
          <p className='transform rotate-90 my-8'>----------</p>
          <p className='text-[1rem] leading-[2rem] font-bold'>
            Continuous Optimization
          </p>
          <p className=''>
            We continually work on optimizing your website and online presence
            to ensure you stay ahead of the competition and maintain strong
            search engine rankings.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
