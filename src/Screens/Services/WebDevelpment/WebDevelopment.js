import React from "react";
import WebDevelopmentComp from "../../../Components/WebDevelopmentComp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import assetImages from "../../../Assets/images/image";

const WebDevelopment = () => {
  return (
    <div
      className='main-container bg-[#262626] py-10 '
      style={{ display: "flex", alignItems: "center" }}
    >
      <Swiper
        slidesPerView='auto'
        modules={[Autoplay]}
        grabCursor={true}
        autoplay={{}}
        speed={10000}
        centeredSlides={true}
        loop={true}
      >
        <SwiperSlide>
          <WebDevelopmentComp
            img={assetImages.ServiceImage}
            heading1={"Web"}
            heading2={"Development"}
            description={
              "A successful website does three things It attracts the right kinds of visitors Guides them to the main services or product you offer Collect Contact details for future ongoing relation"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <WebDevelopmentComp
            img={assetImages.ServiceImage}
            heading1={"Mobile"}
            heading2={"Development"}
            description={
              "Making an app is like drinking a cup of coffee.It's very relaxing when you complete the application.It is an app development that keeps me working all day and night."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <WebDevelopmentComp
            img={assetImages.ServiceImage}
            heading1={"Artificial"}
            heading2={"Intelligence"}
            description={
              "We must address, individually and collectively, moral and ethical issues raised by cutting-edge research in artificial intelligence and biotechnology, which will enable significant life extension, designer babies, and memory extraction"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WebDevelopment;
