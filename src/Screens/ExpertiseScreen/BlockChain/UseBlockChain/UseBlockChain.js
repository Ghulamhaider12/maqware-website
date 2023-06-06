import React from "react";
import { AnimationTag } from "../../../../Components/Text";
import BlockChainComp from "./BlockChainComp";

const cards = [
  {
    Number: "1",
    text: "Saves Time and Operational Costs",
  },
  {
    Number: "2",
    text: "Eliminate the Middle Man",
  },
  {
    Number: "3",
    text: "Makes Data Secure",
  },
  { Number: "4", text: "Ensures high Level of Transparency" },
  { Number: "5", text: "Take control of your Information" },
  { Number: "6", text: "Ensures Completeness of Data" },
];
const UseBlockChain = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] max-w-[1430px] mx-auto gap-6">
      <AnimationTag>Why use Blockchain Technology?</AnimationTag>
      <div className="flex flex-wrap gap-2 xl:gap-3 2xl:gap-[1rem]">
        {cards.map((el, idx) => (
          <BlockChainComp key={idx} number={el.Number} text={el.text} />
        ))}
      </div>
    </div>
  );
};

export default UseBlockChain;
