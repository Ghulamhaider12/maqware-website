import React, { useState } from "react";
import { data } from "../../../Assets/AllPostData";
import { styles } from "../../../Utils/styles/styles";

const AllPostSection = () => {
  const [isHover, setIsHover] = useState(false);
  const [selected, setSelected] = useState(1);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const propOwn = Object.getOwnPropertyNames(data);
  const changeNextView = () => {
    const propOwn = Object.getOwnPropertyNames(data);
    setSelected(
      selected <= propOwn.length || selected <= 4
        ? selected + 1
        : function changeStyle() {
            var element = document.getElementById("nextView");
            element.style.display = "none";
          }
    );
  };
  const changePreviousView = () => {
    const propOwn = Object.getOwnPropertyNames(data);
    setSelected(
      selected <= propOwn.length || selected >= 0
        ? selected - 1
        : function changeStyle() {
            var element = document.getElementById("preView");
            element.style.display = "none";
          }
    );
  };
  const handlePost = (val) => {
    setSelected(val);
  };

  return (
    <div className="mt-10 bg-[#222222] py-8 2xl:gap-2 gap-0">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="flex items-start">
          <div
            className="w-1/2 flex flex-col text-[35px] xl:text-[35px] 2xl:text-[40px] gap-[1rem] -mt-2"
            style={styles.maintext}
          >
            <p>Top</p>
            <p>Pick</p>
            <p>Article</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3 2xl:text-[18px] xl:text-[14px] text-[14px]">
            <p style={styles.InnovativePara}>
              <span>- </span> All Posts
            </p>

            <p
              style={
                selected === 1
                  ? styles.InnovativeParaHover
                  : styles.InnovativePara
              }
              className="cursor-pointer w-fit"
              onClick={() => handlePost(1)}
            >
              <span>- </span>Life Skills{" "}
            </p>

            <p
              style={
                selected === 2
                  ? styles.InnovativeParaHover
                  : styles.InnovativePara
              }
              className="cursor-pointer w-fit"
              onClick={() => handlePost(2)}
            >
              <span>- </span>Marketing
            </p>

            <p
              style={
                selected === 3
                  ? styles.InnovativeParaHover
                  : styles.InnovativePara
              }
              className="cursor-pointer w-fit"
              onClick={() => handlePost(3)}
            >
              <span>- </span>Artificial Intelligence
            </p>

            <p
              style={
                selected === 4
                  ? styles.InnovativeParaHover
                  : styles.InnovativePara
              }
              className="cursor-pointer w-fit"
              onClick={() => handlePost(4)}
            >
              <span>- </span>Cloud & Infrastructure
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-5 xl:gap-20 lg:gap-10 md:gap-5 max-w-[1440px] w-[100%] mx-auto pr-5">
          {/* {Object.values(data).map((item) => {
                    return ( */}
          <div className="w-11/12 flex flex-col gap-1">
            <div className="">
              <img
                src={data[selected]?.img}
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="flex justify-between 2xl:py-2 py-1 mt-3">
              <p
                style={styles.maintext}
                className="2xl:text-[22px] xl:text-[17px] text-[16px] tracking-wide"
              >
                {data[selected]?.title}
              </p>
              <p
                style={styles.cardtxt_happyclient_formtxt}
                className="2xl:text-[18px] xl:text-[14px] text-[14px]"
              >
                {data[selected]?.date}
              </p>
            </div>
            <div
              className="2xl:text-[18px] xl:text-[14px] text-[14px]"
              style={styles.cardtxt_happyclient_formtxt}
            >
              <p>{data[selected]?.paragraph}</p>
              {/* {console.log(data[1].paragraph)} */}
            </div>

            <div className="w-fit">
              {/***************** Button Styling  ************/}

              <div
                style={
                  isHover ? styles.portfolio_btn_Change : styles.portfolio_btn
                }
                className="w-fit cursor-pointer 2xl:text-[20px] xl:text-[18px] lg:text-[14px] md:text-[1.5vw] flex items-center justify-center gap-2 lg:gap-3 mt-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Read More
                <div
                  className="rounded-full"
                  style={
                    isHover
                      ? styles.portfolio_circle_change
                      : styles.portfolio_circle
                  }
                >
                  <span className=" w-6 h-6 xl:w-6 xl:h-6 flex items-center justify-center rounded-full ring-1 ring-white text-sm xl:text-sm ">
                    {" "}
                    &#8594;
                  </span>
                </div>
              </div>

              {/* div end */}
            </div>
          </div>
          {/* )
                })} */}

          {/* {Object.values(data).map((item,index)=>{
            return(
            <div>
                {item.title}
            </div>
                )        })} */}
          {/* {
                    data.id === selected && <div>{data[1].title}</div>
                } */}
          <div className="w-1/12 flex justify-center items-center text-[#BCBCBC] text-[24px] lg:gap-4 gap-0 -mt-40">
            {/* {selected !== 1 && ( */}
            <button
              onClick={changePreviousView}
              disabled={selected === 1}
              id="preView"
              className={`cursor-pointer font-black text-4xl disabled:text-[#c2c2c297] disabled:cursor-not-allowed`}
            >
              {`<`}
            </button>
            {/* )} */}
            {/* {selected !== propOwn.length && ( */}
            <button
              onClick={changeNextView}
              disabled={selected === propOwn.length}
              id="nextView"
              className="cursor-pointer font-black text-4xl disabled:text-[#c2c2c297] disabled:cursor-not-allowed"
            >{`>`}</button>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPostSection;
