import React from "react";
import assetImages from "../../../Assets/images/image";
import HappyClientCard from "../../../Components/HappyClientCard";
import { AnimationTag } from "../../../Components/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/bundle";

const OurHappyClient = () => {
  return (
    <div className=" xl:mx-10 2xl:mx-0 relative w-[100%] mx-auto">
      {/*************** Text  **************/}
      <div className="my-10">
        <AnimationTag>Our Happy Clients</AnimationTag>
      </div>
      {/*************** Slider div  **************/}
      <div className=" md:mx-[20vw] xl:mx-[0vw] 2xl:mx-[15%] lg:mx-[10vw] ">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          // loop={true}
          speed={1000}
          autoplay={{
            delay: 2000,
          }}
          className="2xl:h-[630px] xl:h-[540px] lg:h-[465px] 2xl:w-[56.5rem] xl:w-[43.8rem] lg:w-[34.4rem] md:h-[405px] !-mt-10 xl:!-mt-16 2xl:!-mt-10"
        >
          {/********************* Happy Client Component call **********************/}
          <SwiperSlide>
            <div className="xl:mt-20 lg:mt-[3rem] md:mt-[2.7rem]">
              <HappyClientCard
                img={assetImages.placeholder}
                text1={
                  "Maqware is a go-to team for any project. The team communicates effectively and produces results on schedule. The staff is a delight to work with, and I would recommend its services to anyone in need of modest to large complex tasks. They do everything. After interviewing over ten different firms on Upwork and Fiver, we determined that maqware was the best fit based on their portfolio, pricing, and previous reviews. We understood immediately away that maqware was on top of things. The staff was always prepared for our weekly meetings and was available almost at all times (24/7). We were concerned since we knew our social media platform was complicated, and doing it on time would be significantly more challenging. The team consistently delivered on our expectations, and we are grateful to have discovered Maqware."
                }
                text2={"Nate"}
                text3={"CEO LuxeLocker"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="xl:mt-20 lg:mt-[3rem] md:mt-[2.7rem]">
              <HappyClientCard
                img={assetImages.placeholder}
                text1={
                  "I strongly suggest the maqware team since they just do the job. They did such an excellent job that we have extended our contract with them and will be working with the team to develop additional features and a mobile application. Simply put, the crew works exceptionally hard and gets the job done. Thank you for everything, Maqware team, and we look forward to continuing our collaboration."
                }
                text2={"Arif"}
                text3={"CEO PikeyCoffee"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="xl:mt-20 lg:mt-[3rem]  md:mt-[2.7rem]">
              <HappyClientCard
                img={assetImages.placeholder}
                text1={
                  "Anees and his staff are fantastic! Excellent communication! My web app was created just how I wanted it by the team. If an issue arises, Team is already conveying a remedy to me before I even notice. Very proactive and truthful! I will undoubtedly continue to work with maqware in the future."
                }
                text2={"Rye"}
                text3={"CEO StatusNow"}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurHappyClient;
