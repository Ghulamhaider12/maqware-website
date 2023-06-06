import React from "react";
import ContactSection from "../../Home/ContactSection/ContactSection";
import GameDevProcess from "./GameDevProcess/GameDevProcess";
import InteractiveGame from "./GameDevProcess/InteractiveGame/InteractiveGame";

const GameDevelopment = () => {
  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      <InteractiveGame />
      <GameDevProcess />
      <ContactSection />
    </div>
  );
};

export default GameDevelopment;
