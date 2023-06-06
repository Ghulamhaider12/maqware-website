import React from "react";
import assetGifs from "../../../../Assets/Gifs/Gifs";
import { AnimationTag } from "../../../../Components/Text";
import { styles } from "../../../../Utils/styles/styles";
import HowWeWorkCard from "./HowWeWorkCard";

const HowWeWork = () => {
  const cards = [
    {
      images: assetGifs.ConsultationMarketResearch,
      numb: "1.",
      heading: "Consultation & Market Research",
      text: "We initiate by understanding your business, its goals and objectives, its target audience, and any current digital marketing efforts. We also guide competitors, audience behavior, market benchmarks, and ideal practices.",
    },

    {
      images: assetGifs.StrategyDevelopment,
      numb: "2.",
      heading: "Strategy Development",
      text: "We then develop a budget-friendly digital marketing strategy to reach and engage your audience. Our strategy takes your audience through the funnel and brings in conversions.",
    },

    {
      images: assetGifs.Implementation,
      numb: "3.",
      heading: "Implementation",
      text: "Our team runs the campaigns simultaneously on multiple platforms, distributing the budgets per the campaign’s desired results.",
    },

    {
      images: assetGifs.TrackingAndAnalysis,
      numb: "4.",
      heading: "Tracking And Analysis",
      text: "We evaluate and analyze campaign performance and outcomes to ensure they achieve objectives and have a positive influence on your business.",
    },

    {
      images: assetGifs.Optimization,
      numb: "5.",
      heading: "Optimization",
      text: "Based on the analysis, we continually optimize and improve the campaigns to ensure their effectiveness and drive even better results.",
    },

    {
      images: assetGifs.Reporting,
      numb: "6.",
      heading: "Reporting",
      text: "We provide periodic monthly reporting to keep you informed of the progress and success of the campaigns.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-[90%] max-w-[1440px] mx-auto gap-6">
      <AnimationTag>That's how we work</AnimationTag>
      <div className="flex flex-col items-center">
        <p
          style={styles.parStyle}
          className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px]"
        >
          We work systematically to ensure that the content brings in maximum
          conversions and that your brand resides at the top of the minds of
        </p>
        <p
          style={styles.parStyle}
          className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px]"
        >
          potential customers.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 overflow-hidden gap-5">
        {cards.map((el, idx) => (
          <HowWeWorkCard
            key={idx}
            images={el.images}
            numb={el.numb}
            heading={el.heading}
            text={el.text}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
