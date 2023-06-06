import React from "react";
import "swiper/css";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { AnimationTag } from "../../../Components/Text";
import assetIcons from "../../../Assets/icons/Icons";

const OurToolsAndTechSection = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="mb-10">
        <AnimationTag>Our Technologies</AnimationTag>
      </div>
      <div className="">
        <div className="main-container bg-[#262626] py-20">
          <Swiper
            slidesPerView={8}
            spaceBetween={0}
            breakpoints={{
              1024: {
                width: 1024,
                slidesPerView: 6,
              },
              768: {
                width: 768,
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            // grabCursor={true}
            centeredSlides={true}
            autoplay={{ delay: false }}
            speed={3000}
            loop={true}
          >
            <SwiperSlide>
              <div className="w-24 mt-2">
                <img src={assetIcons.Vue} alt="vue" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 -ml-5 mt-11">
                <img src={assetIcons.Express} alt="express" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-1">
                <img src={assetIcons.js} alt="Js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.node} alt="node" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.angular} alt="Angular Js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 -ml-5 mt-5">
                <img src={assetIcons.Rails} alt="rails" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.python} alt="python" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.Next} alt="next" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-2 ">
                <img src={assetIcons.mysql} alt="My Sql" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.laravel} alt="Laravel" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.php} alt="PHP" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-28 -ml-3 ">
                <img src={assetIcons.react} alt="React js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-36 !mt-8 !-ml-4 ">
                <img src={assetIcons.mongo} alt="Mongo" />
              </div>
            </SwiperSlide>

            {/* once more */}
            <SwiperSlide>
              <div className="w-24 mt-2">
                <img src={assetIcons.Vue} alt="vue" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 -ml-5 mt-11">
                <img src={assetIcons.Express} alt="express" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-1">
                <img src={assetIcons.js} alt="Js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.node} alt="node" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.angular} alt="Angular Js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 -ml-5 mt-5">
                <img src={assetIcons.Rails} alt="rails" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.python} alt="python" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.Next} alt="next" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-2 ">
                <img src={assetIcons.mysql} alt="My Sql" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.laravel} alt="Laravel" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.php} alt="PHP" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-28 -ml-3">
                <img src={assetIcons.react} alt="React js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 !mt-8 !-ml-4 ">
                <img src={assetIcons.mongo} alt="Mongo" />
              </div>
            </SwiperSlide>

            {/* once more */}
            <SwiperSlide>
              <div className="w-24 mt-2">
                <img src={assetIcons.Vue} alt="vue" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 -ml-5 mt-11">
                <img src={assetIcons.Express} alt="express" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-1">
                <img src={assetIcons.js} alt="Js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.node} alt="node" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.angular} alt="Angular Js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 -ml-5 mt-5">
                <img src={assetIcons.Rails} alt="rails" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.python} alt="python" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.Next} alt="next" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-2 ">
                <img src={assetIcons.mysql} alt="My Sql" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-24 ">
                <img src={assetIcons.laravel} alt="Laravel" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-24 mt-6">
                <img src={assetIcons.php} alt="PHP" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-28 -ml-3">
                <img src={assetIcons.react} alt="React js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-32 !mt-8 !-ml-4 ">
                <img src={assetIcons.mongo} alt="Mongo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurToolsAndTechSection;
