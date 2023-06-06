import React from "react";
import assetGifs from "../../../../Assets/Gifs/Gifs";
import { AnimationTag } from "../../../../Components/Text";
import CloudWorkingComp from "./CloudWorkingComp";

const CloudWorking = () => {
  const cards = [
    {
      images: assetGifs.TrackingAndAnalysis,
      heading: "Goals and Portfolio Analysis",
      text: "Our experts evaluate the application portfolio. We strategize cloud migration objectives and priorities by locating and identifying on-premises apps and servers.",
    },

    {
      images: assetGifs.Optimization,
      heading: "Planning & Strategy",
      text: "Then we develop decision criteria for which applications must be moved based on cost and savings analysis across management and support parameters.",
    },

    {
      images: assetGifs.Reporting,
      heading: "Migration & Optimization",
      text: "We set up and execute migration procedures after extensive planning and strategizing, including installing additional utilities for business continuity and security and optimizing the overall migration governance and process.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-[90%] max-w-[1430px] mx-auto gap-6">
      <AnimationTag>How it all Works?</AnimationTag>

      <div className="grid grid-cols-3 grid-rows-1 overflow-hidden gap-5">
        {cards.map((el, idx) => (
          <CloudWorkingComp
            key={idx}
            images={el.images}
            heading={el.heading}
            text={el.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CloudWorking;
