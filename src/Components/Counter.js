import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { styles } from "../Utils/styles/styles";

const Counter = ({
  counterDelay,
  counterstart,
  counterEnd,
  counterDuration,
  subtext,
  counterDecimal,
  plustext,
  classProp,
  text,
}) => {
  const [counterOn, setCountOn] = useState(false);

  return (
    <div className="">
      <div
        className={`flex flex-col items-center justify-center gap-1 ${classProp} text-center whitespace-nowrap`}
      >
        <ScrollTrigger
          style={styles.Our_progresshead}
          onEnter={() => setCountOn(true)}
          onExit={() => setCountOn(false)}
          className={`text-4xl lg:text-6xl flex items-center gap-1 ${text}`}
        >
          {counterOn && (
            <CountUp
              start={counterstart}
              end={counterEnd}
              duration={counterDuration}
              delay={counterDelay}
              decimals={counterDecimal}
            />
          )}
          <span className="text-2xl lg:text-4xl">{plustext}</span>
        </ScrollTrigger>
        <span
          style={styles.Our_progresstext}
          className="flex text-sm lg:text-xl"
        >
          {subtext}
        </span>
      </div>
    </div>
  );
};

export default Counter;
