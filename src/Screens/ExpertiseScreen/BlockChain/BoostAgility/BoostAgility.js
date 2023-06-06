import React from "react";
import assetImages from "../../../../Assets/images/image";
import DoubleTextWithImg from "../../../../Components/DoubleTextWithImg";

const BoostAgility = () => {
  return (
    <div className="">
      <div>
        <DoubleTextWithImg
          title1="Boost Agility, Transparency"
          title2="and Security with Blockchain "
          desc1="BlockChain "
          desc4="Development"
          img={assetImages.BlockChainBg}
        />
      </div>
      <div className="max-w-[1420px] w-[90%] mx-auto text-[#BCBCBC] font-[400] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] xl:leading-10">
        <p>
          Blockchain is indeed the evolution of technology.We help organizations
          boost efficiency, flexibility, agility, and security through custom
          blockchain development services. Our skilled blockchain developers
          create customized, decentralized apps, increasing the traceability and
          security of data and transactions.
        </p>
      </div>
    </div>
  );
};
export default BoostAgility;
