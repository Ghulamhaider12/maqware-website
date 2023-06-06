import React from "react";
import assetIcons from "../../../Assets/icons/Icons";
import { AnimationTag } from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";

const LastingRelationship = () => {
  return (
    <div className='main-container my-[10%] flex flex-col gap-14 max-w-[1440px] w-[100%] mx-auto'>
      <div
        style={styles.maintext}
        className='2xl:text-[36px] xl:text-[32px] text-[28px] flex justify-center'
      >
        <AnimationTag>Lasting Relationships With </AnimationTag>
      </div>

      <div className='flex justify-evenly mx-4 flex-wrap'>
        <img
          src={assetIcons.AllianzLogo}
          alt='AllianzLogo'
          className='object-fill xl:h-[35px] lg:h-[25px] 2xl:h-[50px] md:h-[25px]'
        />
        <img
          src={assetIcons.SDNLogo}
          alt='SDNLogo'
          className='object-fill xl:h-[35px] lg:h-[25px] 2xl:h-[50px] md:h-[25px]'
        />
        <img
          src={assetIcons.FruitsPassion}
          alt='FruitsPassion'
          className='object-fill xl:h-[33px] lg:h-[23px] 2xl:h-[40px] md:h-[25px]'
        />
        <img
          src={assetIcons.AllianzLogo1}
          alt='AllianzLogo1'
          className='object-fill xl:h-[35px] lg:h-[25px] 2xl:h-[50px] md:h-[25px]'
        />
        <img
          src={assetIcons.SDNLogo1}
          alt='SDNLogo1'
          className='object-fill xl:h-[35px] lg:h-[25px] 2xl:h-[50px] md:h-[25px]'
        />
      </div>
    </div>
  );
};

export default LastingRelationship;
