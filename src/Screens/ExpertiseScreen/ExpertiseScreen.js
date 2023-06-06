import React from "react";
// import { useNavigate } from "react-router-dom";
import assetGifs from "../../Assets/Gifs/Gifs";
import Card from "../../Components/card";
import Text from "../../Components/Text";
import { AnimationTag } from "../../Components/Text";
import { styles } from "../../Utils/styles/styles";
import ContactSection from "../Home/ContactSection/ContactSection";

const cards = [
  {
    heading: "Web Development",
    image: assetGifs.WebDevelopment,
    text: "Custom web development for businesses to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to deliver on your business need and maximize delivery speed.",
    link: "/web-development",
  },
  {
    heading: "App Development",
    image: assetGifs.mobileDevelopment,
    text: "We develop pixel-perfect apps for Windows, iOS and Android platforms with first class user experience while keeping the  process simple and providing easy, smart and user friendly mobile applications.",
    link: "/app-development",
  },

  {
    heading: "Digital Marketing",
    image: assetGifs.digitalMarketing,
    text: "We put your product in the right place and at the right time  highlighting unique selling proposition of your product between the right audience by generating advertisements, sales promotions, special offers and public relations.",
    link: "/digital-marketing",
  },
  {
    heading: "Game Development",
    image: assetGifs.gameDevelopment,
    text: "For your next hit game, we provide an end-to-end development service where our designers, developers & marketing professional make your app a success.",
    link: "/game-development",
  },
  {
    heading: "SEO Services",
    image: assetGifs.seoServices,
    text: "We help small and large businesses to grow and promote their services online, target specific audience to gain conversions and profits, boost SERPs ranking to display your site on top of google searches keeping in mind the customer satisfication.",
    link: "/seo-services",
  },
  {
    heading: "Graphic Design",
    image: assetGifs.graphicDesign,
    text: "Our individuals have great design sense. With their utmost efforts we were able to deliver several eye-catching application designs, 3D modeling, logo designing, texturing and animation.",
    link: "/graphic-design",
  },
  {
    heading: "Blockchain Development",
    image: assetGifs.seoServices,
    text: "Blockchain is the evolution of technology. We help organizations by boosting efficiency, flexibility, agility and security through custom blockchain development services. Our skilled blockchain developers create customized.",
    link: "/blockchain-development",
  },
  {
    heading: "UI/UX Design",
    image: assetGifs.seoServices,
    text: "We help small and large businesses to grow and promote their services online, target specific audience to gain conversions and profits, boost SERPs ranking to display your site on top of google searches keeping in mind the customer satisfication.",
    link: "/uiux-design",
  },
  {
    heading: "Cloud Computing",
    image: assetGifs.seoServices,
    text: "We deliver innovative cloud-based solutions featuring near-limitless scalability, IaaS, PaaS, SaaS. Cloud computing is ‘the new buzz’. Shifting to cloud solutions improves mobility of your business & reduces cycle times, empowering you in alterations.",
    link: "/cloud-computing",
  },
];
const ExpertiseScreen = () => {
  // const navigate = useNavigate();
  // const handleNavigate = (link) => {
  //   navigate(link);
  // };
  return (
    // main div
    <>
      <div className="flex flex-col z-20 relative max-w-[1340px] w-[90%] mx-auto gap-10 overflow-x-hidden">
        {/* Text */}
        <div className="flex flex-col items-start xl:pl-40 lg:pl-20">
          <div>
            <Text text2={"What We"} />
          </div>
          <div className="ml-20">
            <p
              className="text-[4vh] lg:text-[5.5vh] xl:text-[6vh] 2xl:text-[6.5vh]"
              style={styles.maintext}
            >
              do for You <span className="text-primary ">|</span>
            </p>
          </div>
        </div>
        <AnimationTag>Our Expertise</AnimationTag>
        {/* second div  */}
        <div className="grid grid-cols-3 grid-rows-2 gap-5 2xl:pt-16 lg:pt-12 md:pt-10 cursor-pointer overflow-hidden ">
          {cards.map((el, idx) => (
            <Card
              key={idx}
              heading={el.heading}
              image={el.image}
              text={el.text}
            />
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default ExpertiseScreen;
