import React from "react";
import assetImages from "../../../Assets/images/image";
import Text, { AnimationTag } from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";

const OurLeaderSection = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto ">
      <div className="my-10">
        <AnimationTag>Our Leaders</AnimationTag>
      </div>
      <div className=" flex flex-col gap-20">
        {/* Div  2 */}
        <div>
          <div className="flex">
            <div className="flex flex-1">
              <img
                src={assetImages.SirAneesBlurImg}
                alt="SirAneespic"
                className="object-cover"
              />
            </div>

            <div className=" flex flex-1">
              <div className=" flex flex-col justify-between">
                <div className="pl-2">
                  <p
                    className="2xl:text-[22px] xl:text-[19px] lg:text-[15px] md:text-[12px]"
                    style={styles.Ourleadertext}
                  >
                    Enthusiast to work with startup ideas based on our
                    philosophy “Ideas to Reality”. I am extremely proud we are
                    on track to deliver quality services. Our team is the main
                    asset of company and i believe we can achieve organizational
                    goals through effective team members.I strongly believe that
                    working in a challenging yet fun-filled environment
                    undoubtedly brings the best out of you. At Maqware Solutions
                    conventional workplace practices are not followed, we focus
                    on empowering our workforce by ensuring a healthy work-life
                    balance.
                  </p>
                </div>
                <div className="flex items-center justify-between top-6 relative">
                  <div className="flex flex-1 justify-start">
                    <img
                      src={assetImages.SirAneesImg}
                      alt="SirAneesImg"
                      className="object-fill"
                    />
                  </div>
                  <div className="flex flex-1 justify-start ml-4">
                    <div className="flex flex-col gap-2">
                      <Text textabout={"Malik Anees Ahmad"} />
                      <p
                        style={styles.Ourleadertext}
                        className="2xl:text-[16px] xl:text-[17px] lg:text-[15px] md:text-[12px] pt-2"
                      >
                        CEO/Co-Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next pic */}
        <div className="flex ">
          <div className="flex flex-1">
            <div className=" flex flex-col justify-between">
              <div className="">
                <p
                  className="2xl:text-[22px] xl:text-[19px] lg:text-[15px] md:text-[12px] pr-4"
                  style={styles.Ourleadertext}
                >
                  {
                    "I’m an entrepreneur, technical advisor, open source evangelist and agile fan. I’m passionate about product and team development, building scalable web infrastructures, development processes and all tech related stuff. MAQWARE Solutions offers a family-friendly place to work in. We have created a culture where our employees can balance both work and life, as life of an engineer is never easy. It is often said that learning is an everlasting process and this is what the idea has always been. With continuous exploration of new thoughts and techniques to gain sustainable growth and success.Our engineers are highly motivated and passionate about what they are doing and we will keep on rolling like this."
                  }
                </p>
              </div>
              <div className="flex items-center justify-between top-6 relative">
                <div className="flex flex-1">
                  <div className="flex flex-col gap-2">
                    <Text textabout={"Muhammad Ahmad Qureshi"} />
                    <p
                      className="2xl:text-[16px] xl:text-[17px] lg:text-[15px] md:text-[12px] pt-2"
                      style={styles.Ourleadertext}
                    >
                      {"Managing Director/Co-Founder"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 justify-end">
                  <img
                    src={assetImages.SirAhmadImg}
                    alt="SirAhmadImg"
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-1 ">
            <img
              src={assetImages.SirAhmadBlurImg}
              alt="SirAhmadpic"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeaderSection;
