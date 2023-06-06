import React from "react";

const Button = ({ title, height, width, fontSize, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${height ? height : " "} ${
        fontSize ? fontSize : "text-xs lg:text-sm 2xl:text-2xl xl:text-lg"
      } ${width ? width : " w-28 xl:w-36"} rounded-full
      font-[Roboto-400]
      hover:bg-white hover:text-primary
      bg-primary text-white
      duration-500
      `}
    >
      {"< "}

      {title}
      <span className="ml-1 ">/</span>
      {">"}
    </button>
  );
};

export default Button;
