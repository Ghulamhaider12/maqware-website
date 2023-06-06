import React from "react";
import assetImages from "../../../Assets/images/image";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import { AnimationTag } from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";
import { useState } from "react";
import Modal from "../../../Components/Modal/Modal";

const ApplySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    applyFor: "",
    about: "",
  });
  const [onCLickSubmit, setOnClickSubmit] = useState(false);
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
    setOnClickSubmit(false);
  };

  const onPressSubmit = (e) => {
    e.preventDefault();
    // console.log("form Data", formData);
    setOnClickSubmit(true);
  };

  const isEmpty = () => {
    if (
      formData?.name === "" ||
      formData?.email === "" ||
      formData?.jobTitle === "" ||
      formData?.applyFor === "" ||
      formData?.about === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className=" max-w-[1440px] w-[90%] mx-auto" id="contactSection">
      <div className="py-10">
        <AnimationTag>Ready to get started?</AnimationTag>
      </div>
      <div className="flex justify-center items-center overflow-hidden h-fit mb-10 lg:px-40 px-28 relative z-40 ">
        {/* Curve pic 1  */}
        <img
          src={assetImages.Curve3}
          alt="Curve pic"
          className="z-10 absolute rotate-[20deg]"
        />

        <form
          action=""
          className="z-20 relative 2xl:w-[45vw] lg:w-[34rem] xl:w-[40rem] "
          style={styles.formBox}
        >
          {/****************Input field and text area **********************/}
          <div className="px-10 py-10 ">
            <div className=" flex mb-4 w-full gap-4 2xl:gap-10 ">
              <div className="w-1/2 ">
                <Input
                  placeholder={"Name"}
                  type={"text"}
                  name={"name"}
                  id={"Name"}
                  value={formData.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="w-1/2">
                <Input
                  placeholder={"Email"}
                  // type={"email"}
                  name={"email"}
                  id={"email"}
                  value={formData.email}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="flex gap-4 2xl:gap-10 w-full mb-5">
              <div
                className="flex  w-1/2 pr relative"
                style={styles.formInputFields}
              >
                <select
                  name="applyFor"
                  id="applyFor"
                  className="w-full h-10 px-6 text-[12px] xl:text-[14px] border border-white focus:outline-none 
                  focus:ring-2 focus:ring-[#55C5CE] focus:border-transparent rounded-[30px] bg-[#262626] text-[#BCBCBC] cursor-pointer"
                  // style={styles.formInputContact}
                  value={formData.applyFor}
                  onChange={handleOnChange}
                >
                  <option
                    value="defaulselected"
                    className="text-[12px] xl:text-[14px]  !cursor-pointer"
                  >
                    Apply For
                  </option>
                  <option
                    value="webdev"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    Web Development
                  </option>
                  <option
                    value="appdev"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    App Development
                  </option>
                  <option
                    value="gamedev"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    Game Development
                  </option>
                  <option
                    value="blockchaindev"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    Blockchain Development
                  </option>
                  <option
                    value="dg-marketing"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    Digital Marketing
                  </option>
                  <option
                    value="seo"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    SEO Services
                  </option>
                  <option
                    value="designer"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    UI/UX Designer
                  </option>
                  <option
                    value="cloud-comp"
                    className="text-[12px] xl:text-[14px] p-2 !cursor-pointer"
                  >
                    Cloud Computing
                  </option>
                </select>
                {/* <select
                  name="countries"
                  style={styles.formInputField}
                  className="mr-3 text-[12px] xl:text-[14px] mt-3 absolute  top-0 right-0 !border-none "
                  value={formData.country}
                  onChange={() => {}}
                >
                  
                </select> */}
              </div>

              <div
                className="flex  w-1/2 pr relative"
                style={styles.formInputFields}
              >
                <input
                  placeholder="Job Title"
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  className="w-full  h-10 px-6 py-4 text-[12px] xl:text-[14px] border border-white focus:outline-none 
                  focus:ring-2 focus:ring-[#55C5CE] focus:border-transparent rounded-[30px] bg-[#262626] text-white"
                  // style={styles.formInputContact}
                  value={formData.contactNumber}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <textarea
              name="about"
              id="textarea"
              cols="62"
              rows="4"
              placeholder="Cover Letter..."
              className="w-full h-[20vh] px-6 py-4 text-[12px] xl:text-[14px] 2xl:text-[16px] border border-white  focus:outline-none 
              focus:ring-2 focus:ring-[#55C5CE] focus:border-transparent rounded-[30px] bg-[#262626] text-[#BCBCBC]"
              // style={styles.formTextArea}
              value={formData.about}
              onChange={handleOnChange}
            ></textarea>

            {/****************Anchor Tags and button **********************/}
            <div className="flex items-center justify-between w-full px-2 py-4 mt-3">
              <div className="flex items-center gap-2">
                <label>
                  <input
                    type="file"
                    className="text-sm text-[#BCBCBC]
                    font-[Roboto-400] font-normal
            file:mr-5 file:py-2 file:px-6
            file:rounded-xl file:border-0
            file:text-sm file:font-medium
            file:bg-[#BCBCBC] file:text-black
            hover:file:cursor-pointer 
            hover:file:
          "
                  />
                </label>
                {/*                 
                <input
                  type="file"
                  name="SelectFile"
                  id="selectFile"
                  className="px-6 py-2 rounded-xl opacity-100 font-[Roboto-400] font-light hover:black hover:font-normal hover:border-none text-[#fff]  "
                  value={formData.contactNumber}
                  onChange={handleOnChange}
                /> */}
                {/*           
                <button className="px-6 py-2 rounded-xl opacity-100 font-[Roboto-400] font-light hover:black hover:font-normal hover:shadow-xl bg-[#BCBCBC] hover:opacity-90 text-black duration-200">
                  Choose file
                </button>
                <p
                  style={styles.formanchor}
                  className="text-[12px] 2xl:text-[16px] xl:text-[14px]"
                >
                  No file choosen
                </p> */}
              </div>
              <Button
                height={"h-[35px] "}
                width={"w-[100px] "}
                fontSize={"text-[14px]"}
                title={"Send"}
                onClick={onPressSubmit}
              />
            </div>
            {onCLickSubmit && isEmpty() && (
              <p className="text-red-500 mt-0 ml-2">
                {" "}
                Please enter contact information first{" "}
              </p>
            )}
            {onCLickSubmit && !isEmpty() && (
              <Modal
                title={"Contact You Soon"}
                children={
                  <div className="text-base">
                    Our HR Team will contact you soon.
                  </div>
                }
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplySection;
