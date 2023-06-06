import React from "react";
import { AnimationTag } from "../../../../Components/Text";
import AppDevCard from "./AppDevCard";

const AppDevProcess = () => {
  const cards = [
    {
      heading: "iOS App Development",
      text: "We boldly reinvent your vision, get it ready to churn in revenue, and feature it by using technology that is beyond your wildest expectations. We create apps for iPhone, iWatch, and iPad, with a distinctive user experience. Our iOS solutions are adaptable to the needs of various businesses.",
    },
    {
      heading: "Android App Development",
      text: "We engineer apps that solve users’ pain-points bringing delight in their everyday life. We consciously follow the Material Design Guidelines to create stunning apps following Android community guidelines. And we know the best libraries too!",
    },
    {
      heading: "React Native App Development",
      text: "Featuring traits like reusability, cross-platform support, speed, clean and better UI design, we and our clients equally love to make our apps using React Native/Hybrid to cover both iOS and Android apps.",
    },
    {
      heading: "Enterprise Mobile Solutions",
      text: "We flaunt unrivaled custom Enterprise Mobility Solutions to help you manage and grow your business. Our handy solutions help your employees stay connected and your company's data secure. In short, you can now embrace enterprise mobility and get ahead of the competition without any worry.",
    },
  ];

  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <AnimationTag>We Develop & Deliver</AnimationTag>
      <div className="grid grid-cols-4 grid-rows-1 2xl:pt-16 lg:pt-12 md:pt-10 overflow-hidden gap-5">
        {cards.map((el, idx) => (
          <AppDevCard key={idx} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
};

export default AppDevProcess;
