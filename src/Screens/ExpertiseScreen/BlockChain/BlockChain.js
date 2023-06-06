import React from "react";
import ContactSection from "../../Home/ContactSection/ContactSection";
import BlockChainWorking from "./BlockChainWorking/BlockChainWorking";
import BoostAgility from "./BoostAgility/BoostAgility";
import UseBlockChain from "./UseBlockChain/UseBlockChain";

const BlockChain = () => {
  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      <BoostAgility />
      <UseBlockChain />
      <BlockChainWorking />
      <ContactSection />
    </div>
  );
};

export default BlockChain;
