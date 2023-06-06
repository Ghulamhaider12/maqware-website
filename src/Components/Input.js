import React from "react";
import { styles } from "../Utils/styles/styles";

const Input = ({ placeholder, type, name, id, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full h-10 px-6 py-4 text-[10px] lg:text-[12px] xl:text-[14px] border border-white  focus:outline-none 
focus:ring-2 focus:ring-[#55C5CE] focus:border-transparent rounded-[30px] bg-[#262626] text-white"
        style={styles.formInputFields}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
