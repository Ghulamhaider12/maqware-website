import React from "react";
import Counter from "../../../Components/Counter";
import { AnimationTag } from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";

const OurProgressReport = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1340px] w-[90%] mx-auto ">
      <div className="my-10">
        <AnimationTag>Our Progress Report</AnimationTag>
      </div>

      {/**************** Counter ******************/}
      <div className="flex lg:gap-4 items-start md:gap-3 ">
        <Counter
          counterstart={0}
          counterEnd={105}
          counterDelay={0}
          counterDuration={2}
          counterDecimal={0}
          subtext={"Projects Delivered"}
          plustext={"+"}
        />
        <span
          style={styles.Our_progressLine}
          className=" lg:h-[100px] md:h-[10vh] "
        ></span>

        <Counter
          counterstart={0}
          counterEnd={50}
          counterDelay={0}
          counterDuration={2}
          counterDecimal={0}
          subtext={"Creative heads at Work"}
          plustext={"+"}
        />
        <span
          style={styles.Our_progressLine}
          className=" lg:h-[100px] md:h-[10vh] "
        ></span>

        <Counter
          counterstart={0}
          counterEnd={5}
          counterDelay={0}
          counterDuration={1}
          counterDecimal={0}
          subtext={"Years in the Industry"}
          plustext={"+"}
        />
        <span
          style={styles.Our_progressLine}
          className=" lg:h-[100px] md:h-[10vh] "
        ></span>

        <Counter
          counterstart={0}
          counterEnd={5.0}
          counterDelay={0}
          counterDuration={1}
          counterDecimal={1}
          subtext={"Overall Client Ratings"}
        />
      </div>
    </div>
  );
};

export default OurProgressReport;
