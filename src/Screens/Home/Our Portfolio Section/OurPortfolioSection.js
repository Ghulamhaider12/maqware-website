import React from "react";
import { Link, useNavigate } from "react-router-dom";
import assetImages from "../../../Assets/images/image";
import Button from "../../../Components/Button";
import PortfolioCard from "../../../Components/PortfolioCard";
import { AnimationTag } from "../../../Components/Text";
const cards = [
  {
    heading: "Beauty S.",
    image: assetImages.PIKEYCOFFEEInterior,
    text: "PikeyCoffee",
    link: "/PikeyCoffee",
  },
  {
    heading: "mid Century",
    image: assetImages.StatusNow,
    text: "StatusNow",
    link: "/StatusNow",
  },
  {
    heading: "mid Century",
    image: assetImages.LuxeLocker,
    text: "LuxeLocker",
    link: "/luxe-locker",
  },
];
const OurPortfolioSection = () => {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div className=" relative max-w-[1440px] w-[90%] mx-auto ">
      <div className="my-10">
        {/* Text  */}
        <AnimationTag>Our Portfolio</AnimationTag>
      </div>

      {/* Portfolio Card Section  */}
      <div className=" grid grid-cols-3 grid-rows-1 gap-5 overflow-hidden ">
        {cards.map((el, idx) => {
          return (
            <PortfolioCard
              key={idx}
              heading={el.heading}
              image={el.image}
              text={el.text}
              onClick={() => handleNavigate(el.link)}
            />
          );
        })}
      </div>

      <div className="flex justify-center mt-10 ">
        <Link to="/Portfolio">
          <Button
            title={"View All"}
            fontSize={
              "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[12px]"
            }
            height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[35px]"}
            width={"2xl:w-[150px] lg:w-[135px] md:w-[110px] xl:w-[140px]"}
            onClick={() => navigate("/Portfolio")}
          />
        </Link>
      </div>
    </div>
  );
};

export default OurPortfolioSection;
