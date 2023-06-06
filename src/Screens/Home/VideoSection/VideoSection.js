import React from "react";
import assetVideo from "../../../Assets/Videos/Videos";
import Text from "../../../Components/Text";

const VideoSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-80px)] overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        className="w-full absolute  opacity-50 h-full object-fill"
      >
        <source src={assetVideo.BgVideo} type="video/mp4" />
      </video>
      <div className="z-10 relative">
        <Text
          className={
            "text-white font-[tex-gyre-adventor-700]  text-[4vh] lg:text-[5.5vh] xl:text-[6vh] 2xl:text-[6.5vh] -mt-16"
          }
        >
          <>
            Our Expertise Your Growth <span className="text-primary">|</span>
          </>
        </Text>
      </div>
    </div>
  );
};

export default VideoSection;
