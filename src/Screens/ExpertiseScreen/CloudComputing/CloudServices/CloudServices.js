import React from "react";
import { AnimationTag } from "../../../../Components/Text";
import GameDevProcessCard from "../../GameDevelopment/GameDevProcess/GameDevProcessCard";

const cards = [
  {
    heading: "Cloud Strategy and Assessment",
    text: "We make it possible for you to smoothly switch to the cloud, whether you're transferring an off-the-shelf package, porting existing software, or designing a new application from the start. Our strategic planning offers helpful insights that already have a cloud presence.",
  },
  {
    heading: "Cloud Assessment and Optimization",
    text: "Reduce your cloud expenses and under-utilization of cloud resources. Our specialists right-size and automate your cloud implementations to achieve the best possible balance of performance, reliability, and cost-effectiveness.",
  },
  {
    heading: "Cloud Adoption and Transformation Strategy",
    text: "To reach your strategic goals, our specialists offer the best mix of cloud platform, deployment model, and service types. We provide a cloud adoption roadmap, an economic evaluation, and an IT roadmap for your cloud journey.",
  },
];
const CloudServices = () => {
  return (
    <div className="max-w-[1430px] w-[90%] mx-auto flex flex-col justify-center items-center ">
      <AnimationTag>Our Services</AnimationTag>
      <div className="grid grid-cols-3 grid-rows-1 2xl:pt-16 lg:pt-12 md:pt-10 overflow-hidden gap-10">
        {cards.map((el, idx) => (
          <GameDevProcessCard key={idx} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
};

export default CloudServices;
