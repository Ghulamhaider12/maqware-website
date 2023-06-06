import React from "react";
import { useState } from "react";
// Import Swiper Lib
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./explorestyles.css";
import assetIcons from "../../../Assets/icons/Icons";
import assetImages from "../../../Assets/images/image";
import { styles } from "../../../Utils/styles/styles";
import { Autoplay } from "swiper";

const ExplorePictureSection = () => {
  const [clicked, setClicked] = useState(false);

  const changeView = () => {
    setClicked(true);
  };
  const changeView2 = () => {
    setClicked(false);
  };

  return (
    <div className="max-w-[1440px] w-[100%] mx-auto z-40">
      {!clicked ? (
        <div className="main-container flex justify-center">
          {/* Right Container */}
          <div className="w-3/5 mt-20">
            <div className="relative">
              <div className="flex items-center justify-center">
                <div
                  onClick={() => changeView()}
                  className="text-white absolute flex gap-1 items-baseline top-[50%] cursor-pointer"
                >
                  <span className=" text-[19px]">Explore</span>
                  <img src={assetIcons.Arrow} alt="Arrow" className="h-3 w-3" />
                </div>
              </div>
              <img src={assetImages.exploreImg} alt="" className="" />
            </div>
          </div>

          {/* Left container */}
          <div className="w-2/5 flex justify-center">
            <div className="flex  flex-col justify-center">
              <div className="text-[40px]">
                <p style={styles.aboutUsHeading}>We thrive</p>
                <p style={styles.maintext}>and inspire</p>
              </div>
              <div
                className="2xl:text-[19px] xl:text-[17px] lg:text-[15px] md:text-[12px]  pt-3"
                style={styles.OurBeleivepara}
              >
                <p>Our team shares a love for traveling and</p>
                <p>photography. We celebrate Crafton's anniversary</p>
                <p>each year by going to the most beautiful parts</p>
                <p>of Europe.</p>
                <p>Every experience together brings positive energy</p>
                <p>that we use to reach new levels.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-container flex mt-12">
          <Swiper
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            loop={true}
            speed={6000}
            className=""
          >
            <div className=" absolute top-0 right-0 flex items-center justify-center z-30">
              <div
                className="text-white flex gap-1 items-baseline relative cursor-pointer rounded-2xl border-[#000] bg-[#000] p-2 "
                onClick={() => changeView2()}
              >
                <img src={assetIcons.close} alt="Arrow" />
              </div>
            </div>
            <SwiperSlide>
              <div
                className="ml-[8%] w-fit d-flex flex-col gap-5 pt-20"
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <img
                  src={assetImages[1]}
                  alt="1"
                  className="object-fill xl:h-[240px] lg:h-[240px] 2xl:h-[280px]"
                />
                <img
                  src={assetImages[2]}
                  alt="2"
                  className="ml-8 lg:mt-[8%] 2xl:mt-[5%] xl:mt-[4%] object-fill xl:h-[240px] lg:h-[240px] 2xl:h-[280px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-fit pt-20">
                <img
                  src={assetImages[3]}
                  alt="3"
                  className="ml-[14%] object-fill xl:h-[240px] lg:h-[240px] 2xl:h-[280px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-fit pt-20">
                <img
                  src={assetImages[4]}
                  alt="4"
                  className="ml-[14%] object-fill xl:h-[480px] lg:h-[480px] 2xl:h-[560px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-fit d-flex flex-col gap-5 pt-20">
                <img
                  src={assetImages[5]}
                  alt="5"
                  className="object-fill xl:h-[240px] lg:h-[240px] 2xl:h-[280px]"
                />
                <img
                  src={assetImages[6]}
                  alt="6"
                  className="lg:mt-[8%] 2xl:mt-[5%] xl:mt-[4%] object-fill xl:h-[240px] lg:h-[240px] 2xl:h-[280px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ExplorePictureSection;
