import React from "react";
import { AnimationTag } from "../../../../Components/Text";
import { styles } from "../../../../Utils/styles/styles";
import GameDevProcessCard from "./GameDevProcessCard";

const cards = [
  {
    heading: "Ideation & Planning",
    text: "We take your basic idea and research the market. Together with your team, we identify the target audience, build personas, predict budgets, and decide on frameworks.",
  },
  {
    heading: "Pre-production",
    text: "This is where writers, artists, designers, developers, engineers, project leads, and other crucial departments collaborate on the scope of the video game and where each piece of the puzzle fits. Storyboarding, prototyping, and milestone scheduling are all included in pre-production.",
  },
  {
    heading: "Production",
    text: "The production phase entails modeling, designing, audio, and visual effects, mechanics, developing, and rendering.",
  },
  {
    heading: "Testing",
    text: "Our teams performs tests like bug identification, feature exploitation, ease of playing, etc.",
  },
  {
    heading: "Pre-launch, Launch",
    text: "Includes alpha and beta release marketing and last-minute improvements.Final bug fixes, polishing, fine-tuning, and master release.",
  },
  {
    heading: "Post Launch",
    text: "More bug squashing and adding new features.",
  },
];

const GameDevProcess = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col justify-center items-center">
      <AnimationTag>Game Development Process</AnimationTag>
      <p style={styles.parStyle} className="text-[20px] mt-4">
        We take your requirements, advise you on the best platforms to build
        them on, and create them using the latest technologies and trends.
      </p>
      <p style={styles.parStyle} className="text-[20px]">
        Usually, there are seven stages to producing a game.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 2xl:pt-16 lg:pt-12 md:pt-10 overflow-hidden gap-10">
        {cards.map((el, idx) => (
          <GameDevProcessCard key={idx} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
};

export default GameDevProcess;
