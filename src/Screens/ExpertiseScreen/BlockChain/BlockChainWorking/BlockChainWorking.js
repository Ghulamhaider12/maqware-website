import React from "react";
import BlockChainCircleComp from "./BlockChainCircleComp";

const BlockChainWorking = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" relative h-[50vh] w-[50vw] flex justify-center items-center bg-red-200">
        <div className="absolute rotate-90 top-0 -mt-[7.5rem]">
          <BlockChainCircleComp
            text={
              "Order is transmitted to decentralized computer network (nodes)"
            }
          />
        </div>
        <div className="absolute top-0 rotate-[130deg] ml-[20rem] -mt-[3.8rem]">
          <BlockChainCircleComp
            text={
              "Order is transmitted to decentralized computer network (nodes)"
            }
          />
        </div>
        <div className="absolute top-0 rotate-[50deg] mr-[20rem] -mt-[3.8rem]">
          <BlockChainCircleComp
            text={
              "Order is transmitted to decentralized computer network (nodes)"
            }
          />
        </div>
        <div className="w-44 h-44 rounded-full border-[2px] border-[#262626] flex justify-center">
          <div className="flex items-center justify-center relative ">
            <div className="w-40 h-40 rounded-full bg-[#55C5CE] flex justify-center items-center">
              <span className="text-center w-20 absolute 2xl:text-[24px] xl:text-[14px] lg:text-[12px] md:text-[9px] font-[700] text-[#262626]">
                How it works
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockChainWorking;
