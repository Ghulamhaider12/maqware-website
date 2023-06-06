import assetImages from "../../../Assets/images/image";
import DoubleTextWithImg from "../../../Components/DoubleTextWithImg";

const BuisnessSearch = () => {
  return (
    <div>
      <div>
        <DoubleTextWithImg
          title1='Helping your business'
          title2=' Solutions for your Business Needs'
          desc1='Let’s face it!'
          //   desc2='solution!'
          img={assetImages.seo}
        />
      </div>
      <div className='mx-[45px] lg:mx-[55px] xl:mx-[100px] 2xl:mx-[250px] text-[#BCBCBC] font-[400]  md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem]'>
        <p>
          You wish to see your business on the first page of Google results, but
          you just don’t know how to get there. No worries, you've just found
          the right people who will optimize your website and will help you
          appear in the top search results in front of the right people at the
          right time.
        </p>
      </div>
    </div>
  );
};
export default BuisnessSearch;
