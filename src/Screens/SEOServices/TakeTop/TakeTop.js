const TakeTop = () => {
  return (
    <div>
      <div className='mt-10 mx-[45px] lg:mx-[55px] xl:mx-[100px] 2xl:mx-[250px]'>
        <div
          className='text-white text-[2rem] font-bold my-4'
          style={{ display: "flex", gap: "3px", justifyContent: "center" }}
        >
          {"<"}
          <p>How we take you to the Top?</p>
          <span className='text-primary'>|</span>
          {">"}
        </div>
        <div className='text-[#BCBCBC] text-center mx-3'>
          <p>
            Our SEO experts have years of experience and a deep understanding of
            how search engines work. We employ a personalized approach to SEO
            and customize our strategy to address the unique needs of your brand
            and industry. To ensure we are achieving the desired outcomes, we
            track and assess performance and make any required improvements
            throughout the process.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TakeTop;
