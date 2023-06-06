import React from "react";
import assetImages from "../../../Assets/images/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/bundle";
import TrendingBlogCard from "../../../Components/TrendingBlogCard";
import { AnimationTag } from "../../../Components/Text";

const TrendingBlogsSection = () => {
  return (
    <div className=" xl:mx-10 2xl:mx-80 relative max-h-max d-flex flex-col items-center justify-center">
      {/*************** Text  **************/}
      <div className="py-10">
        <AnimationTag>Trending Blogs</AnimationTag>
      </div>

      {/*************** Slider div  **************/}
      <div className="lg:mt-20 xl:mt-10 md:mt-8 xl:mx-40 mx-20 2xl:mx-0">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={false}
          speed={12000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="2xl:h-[690px] xl:h-[580px] lg:h-[500px] bg-black md:h-[580px] pb-10"
          breakpoints={{
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          {/********************* Happy Client Component call **********************/}
          <SwiperSlide>
            <TrendingBlogCard
              img={assetImages.Data}
              date={"May 20, 2021"}
              Heading={"Industry Map: Digital Banking & Insurance"}
              para={
                "Discover new digitalization opportunities for banking & insurance."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <TrendingBlogCard
              img={assetImages.Robo}
              date={"May 20, 2021"}
              Heading={
                "What is Artificial Intelligence? Types, History and Future"
              }
              para={
                "Discover new digitalization opportunities for banking & insurance."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <TrendingBlogCard
              img={assetImages.Insta}
              date={"May 20, 2021"}
              Heading={"How to use Instagram Dark Mode with iOS and Android"}
              para={
                "Discover new digitalization opportunities for banking & insurance."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingBlogsSection;
