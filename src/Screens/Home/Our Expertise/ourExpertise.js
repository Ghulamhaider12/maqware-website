import React from "react";
import assetGifs from "../../../Assets/Gifs/Gifs";
import assetImages from "../../../Assets/images/image";
import Card from "../../../Components/card";
import { useNavigate } from "react-router-dom";
import { AnimationTag } from "../../../Components/Text";

const cards = [
  {
    heading: "Web Development",
    image: assetGifs.WebDevelopment,
    text: "Custom web development for businesses to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to deliver on your business need and maximize delivery speed.",
    servicesId: "webDevelopment",
  },
  {
    heading: "App Development",
    image: assetGifs.mobileDevelopment,
    text: "We develop pixel-perfect apps for Windows, iOS and Android platforms with first class user experience while keeping the  process simple and providing easy, smart and user friendly mobile applications.",
    servicesId: "appDevelopment",
  },
  {
    heading: "Blockchain Development",
    image: assetGifs.BlockchainDevelopment,
    text: "Blockchain is the evolution of technology. We help organizations by boosting efficiency, flexibility, agility and security through custom blockchain development services. Our skilled blockchain developers create customized.",
    servicesId: "blockchainDevelopment",
  },
  {
    heading: "Game Development",
    image: assetGifs.gameDevelopment,
    text: "For your next hit game, we provide an end-to-end development service where our designers, developers & marketing professional make your app a success.",
    servicesId: "gameDevelopment",
  },

  {
    heading: "Digital Marketing",
    image: assetGifs.digitalMarketing,
    text: "We put your product in the right place and at the right time  highlighting unique selling proposition of your product between the right audience by generating advertisements, sales promotions, special offers and public relations.",
    servicesId: "digitalMarketing",
  },
  {
    heading: "SEO Services",
    image: assetGifs.seoServices,
    text: "We help small and large businesses to grow and promote their services online, target specific audience to gain conversions and profits, boost SERPs ranking to display your site on top of google searches keeping in mind the customer satisfication.",
    servicesId: "seoServices",
  },
  {
    heading: "Graphic Design",
    image: assetGifs.graphicDesign,
    text: "Our individuals have great design sense. With their utmost efforts we were able to deliver several eye-catching application designs, 3D modeling, logo designing, texturing and animation.",
    servicesId: "graphicDesign",
  },
  {
    heading: "UI/UX Design",
    image: assetGifs.UIUX,
    text: "We help small and large businesses to grow and promote their services online, target specific audience to gain conversions and profits, boost SERPs ranking to display your site on top of google searches keeping in mind the customer satisfication.",
    servicesId: "uiuxDesign",
  },
  {
    heading: "Cloud Computing",
    image: assetGifs.CloudComputing,
    text: "We deliver innovative cloud-based solutions featuring near-limitless scalability, IaaS, PaaS, SaaS. Cloud computing is ‘the new buzz’. Shifting to cloud solutions improves mobility of your business & reduces cycle times, empowering you in alterations.",
    servicesId: "cloudComputing",
  },
];
const OurExpertise = () => {
  const navigate = useNavigate();
  const scrollTo = (id) => {
    navigate("/services", {
      state: { from: id },
    });
  };
  return (
    // main div
    <>
      <div className="flex flex-col z-20 relative max-w-[1420px] w-[90%] mx-auto">
        {/* Text */}
        <div className="mt-10 mb-5">
          <AnimationTag>Our Expertise</AnimationTag>
        </div>

        {/* Curve pic 1  */}
        <img
          src={assetImages.Curve}
          alt="Curve pic"
          className="z-10 absolute 2xl:w-[314px] 2xl:h-[320px] lg:w-[300px] lg:h-[240px] md:h-[220px] xl:-right-28 xl:top-14 lg:-right-[7rem] lg:top-[3.6rem] 2xl:-right-[7rem] 2xl:top-[3rem] lg:-rotate-[36deg] md:-right-[3.5rem] md:top-[0.5rem] md:-rotate-[18deg] xl:-rotate-[35deg] 2xl:-rotate-[30deg] "
        />
        {/* second div  */}
        <div className="grid grid-cols-3 grid-rows-2 gap-5 2xl:pt-16 lg:pt-12 md:pt-10 overflow-hidden  ">
          {cards.map((el, idx) => (
            <Card
              key={idx}
              heading={el.heading}
              OnClick={() => scrollTo(el.servicesId)}
              image={el.image}
              text={el.text}
            />
          ))}
        </div>

        {/* Curve 2 img */}
        <img
          src={assetImages.Curve2}
          alt="Curve pic"
          className="z-10 absolute md:h-[80px] w-[314px] 2xl:h-[560.74px] xl:h-[340px] lg:h-[180px] md:-left-32 md:bottom-32 md:-rotate-3 lg:-left-20 lg:bottom-32 lg:-rotate-3 2xl:-left-[10rem] 2xl:-bottom-40 2xl:rotate-[25deg] xl:rotate-12 xl:-left-10 xl:bottom-0 "
        />
      </div>
    </>
  );
};

export default OurExpertise;
