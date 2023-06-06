import assetImages from "../Assets/images/image";
import { styles } from "../Utils/styles/styles";
const DoubleTextWithImg = ({ title1, title2, desc1, desc2, desc3, img }) => {
  return (
    <div className='text-white py-8'>
      <div className='' style={styles.mainParagraph}>
        <div
          className='md:leading-[25px] lg:leading-[40px] xl:leading-[55px] max-w-[1440px] w-[90%] mx-auto 
      '
        >
          <div>
            <p className='text-[2rem] lg:text-[3rem] xl:text-[3.7rem] mb-4'>
              {title1}
            </p>
          </div>
          <div>
            <p className='text-[2rem] lg:text-[3rem] xl:text-[3.7rem] ml-[6rem]'>
              {title2}
              <b className='text-[#55C5CE]'>|</b>
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center mt-[1.5rem] md:text-[1.3rem] lg:text-[1.6rem] xl:text-[1.8rem]'>
          <div className='max-w-[1440px] w-2/6 '>
            <div className='leading-[30px] lg:leading-[40px] ml-[4.5rem]'>
              <p>{desc1}</p>
              <p>
                {desc2} <b className='text-[#55C5CE]'>|</b>
              </p>
              <p>{desc3}</p>
            </div>
          </div>
          <div className=' w-4/6 '>
            <img
              src={img ? img : assetImages.web}
              alt='Web Development'
              className='object-fill w-full h-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoubleTextWithImg;
