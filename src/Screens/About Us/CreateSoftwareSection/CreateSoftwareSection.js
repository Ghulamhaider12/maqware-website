import React from "react";
import assetImages from "../../../Assets/images/image";
import Text from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";

const CreateSoftwareSection = () => {
  return (
    <div className="w-[100%] mx-auto overflow-hidden">
      <div className="">
        {/* Text */}
        <div className="flex flex-col items-start max-w-[1440px] w-[90%] mx-auto">
          <div
            style={styles.maintext}
            className="2xl:text-[40px] xl:text-[36px] text-[32px]"
          >
            <p>We Create</p>
            <p className="ml-20">
              Software for You <span className="text-primary">|</span>
            </p>
          </div>
        </div>

        {/*Picture  */}
        <div className="flex mt-5">
          <div className="w-3/12 flex justify-center items-center relative left-[6.5vw]">
            <div className="">
              <Text text3={"We are building "} />
              <Text text3={"relationships not only "} />
              <Text text3={"solutions"} />
            </div>
          </div>
          <div className="w-9/12 ">
            <img
              src={assetImages.AboutUsImg}
              alt="About us"
              className=" w-full object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSoftwareSection;
