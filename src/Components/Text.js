import React from "react";
import { styles } from "../Utils/styles/styles";

const Text = ({ children, className, text, text2, text3, textabout }) => {
  return (
    <div>
      {children && (
        <div
          className={
            "flex flex-row justify-center items-center 2xl:text-[4vh] text-[2.8vh] lg:text-[3vh] xl:text-[3.5vh] " +
            className
          }
        >
          {children}
        </div>
      )}

      {text && (
        <div
          className="flex flex-row justify-center items-center 2xl:text-[34px] text-[1.5rem] lg:text-[24px] xl:text-[27px]"
          style={styles.maintext}
        >
          {text}
        </div>
      )}
      {text2 && (
        <div
          className="text-[4vh] lg:text-[5.5vh] xl:text-[6vh] 2xl:text-[6.5vh]"
          style={styles.maintext}
        >
          {text2}
        </div>
      )}
      {text3 && (
        <div
          className="text-[16px] lg:text-[22px] xl:text-[28px] 2xl:text-[34px] md:text-[16px]"
          style={styles.aboutUsHeading}
        >
          {text3}
        </div>
      )}
      {textabout && (
        <div
          className="2xl:text-[38.5px] text-3xl lg:text-2xl xl:text-[32.5px] md:text-xl"
          style={styles.maintext}
        >
          {textabout}
        </div>
      )}
    </div>
  );
};
export const AnimationTag = ({ children }) => {
  return (
    <Text
      text={
        <>
          {"< "}
          {children}
          <span className="text-primary ml-2">/</span>
          {" >"}
        </>
      }
    ></Text>
  );
};

export default Text;
