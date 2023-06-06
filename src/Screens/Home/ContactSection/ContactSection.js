import React from "react";
import { countries } from "../../../Assets/countries";
import assetImages from "../../../Assets/images/image";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import { AnimationTag } from "../../../Components/Text";
import { styles } from "../../../Utils/styles/styles";
import { useState } from "react";
import Modal from "../../../Components/Modal/Modal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    country: "",
    intersted: "",
    about: "",
    countryCode: "",
  });
  const [onCLickSubmit, setOnClickSubmit] = useState(false);
  const [showError, setShowError] = useState(false);
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
    if (!isEmpty()) {
      setOnClickSubmit(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const isEmpty = () => {
    if (
      formData?.name === "" ||
      formData?.email === "" ||
      formData?.contactNumber === "" ||
      formData?.intersted === "" ||
      formData?.about === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className=" max-w-[1440px] w-[90%] mx-auto mb-5" id="contactSection">
      <div className="mt-5 mb-10 ">
        <AnimationTag>Fortune favors the bold, start today</AnimationTag>
      </div>

      <div className="flex justify-center items-center overflow-hidden h-fit lg:px-40 px-28 relative z-40 ">
        {/* Curve pic 1  */}
        {/* <img src={assetImages.Curve2} alt="Curve pic" className='z-10 h-[1100px] w-80 rotate-45 absolute -ml-[1350px] mt-96 ' /> */}
        <img
          src={assetImages.Curve3}
          alt="Curve pic"
          className="z-10 absolute rotate-[20deg]"
        />

        <form
          action=""
          className="z-20 relative 2xl:w-[56rem] lg:w-[34rem] xl:w-[43.7rem]"
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
              <div className="flex w-1/2 pr" style={styles.formInputFields}>
                <select
                  name="countries"
                  style={styles.formInputField}
                  className="mr-2 text-[12px] xl:text-[14px] px-4 absolute py-2 mt-1 ml-1 border-r-[1px] focus:outline-none"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      country: e.target.value,
                    })
                  }
                >
                  {countries.map((getcountries, index) => {
                    return (
                      <option
                        value={getcountries.phone}
                        className="text-[10px] lg:text-[12px] xl:text-[14px]  p-2"
                        key={index}
                      >
                        {getcountries.code}
                      </option>
                    );
                  })}
                </select>
                <input
                  placeholder="Contact Number"
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  className="w-full indent-[4rem] h-10 px-6 py-4 text-[10px] lg:text-[12px] xl:text-[14px] border border-white focus:outline-none 
                  focus:ring-2 focus:ring-[#55C5CE] focus:border-transparent rounded-[30px] bg-[#262626] text-white"
                  // style={styles.formInputContact}
                  value={formData.contactNumber}
                  onChange={handleOnChange}
                />
              </div>

              <div className="w-1/2">
                <Input
                  placeholder={"Interested In"}
                  type={"text"}
                  name={"intersted"}
                  id={""}
                  value={formData.intersted}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <textarea
              name="about"
              id="textarea"
              cols="62"
              rows="4"
              placeholder="A few sentences about your project..."
              className="w-full h-[20vh] px-6 py-4 text-[12px] xl:text-[14px] border border-white  focus:outline-none 
              focus:ring-2 focus:ring-[#55C5CE] focus:border-transparent rounded-[30px] bg-[#262626] text-white"
              // style={styles.formTextArea}
              value={formData.about}
              onChange={handleOnChange}
            ></textarea>

            {/****************Anchor Tags and button **********************/}
            <div className="flex items-center justify-between w-full px-2 py-4 mt-3">
              <div className="flex items-center gap-1">
                <a
                  href="mailto:contact@maqware.com"
                  style={styles.formanchor}
                  className="text-[12px] xl:text-[14px]"
                >
                  Hate forums?{" "}
                </a>
                <a
                  href="mailto:contact@maqware.com"
                  style={styles.formanchor2}
                  className="text-[12px] xl:text-[14px]"
                >
                  contact@maqware.com
                </a>
              </div>
              <Button
                height={"h-[35px] "}
                width={"w-[100px] "}
                fontSize={"text-[14px]"}
                title={"Send"}
                onClick={onPressSubmit}
              />
            </div>
            {showError && isEmpty() && (
              <p className="text-red-500 -mt-5 ml-2">
                {" "}
                Please enter contact informatiomn first{" "}
              </p>
            )}
            {onCLickSubmit && !isEmpty() && (
              <Modal
                title={"Contact You Soon"}
                children={
                  <div className="text-base">
                    Our team will contact you soon.
                  </div>
                }
              />
            )}
          </div>
        </form>

        {/* Curve 2 img */}
        {/* <img src={assetImages.Curve} alt="Curve pic" className='z-10 absolute w-[30vw] md:-right-[17vw] md:-top-[14vh] md:rotate-[30deg] 2xl:right-10 2xl:-top-[27rem] 2xl:rotate-[35deg] xl:right-28 xl:-top-44 xl:rotate-[35deg] lg:-right-[0px] lg:-top-[5vh] lg:rotate-[15deg]' /> */}
      </div>
    </div>
  );
};

export default ContactSection;
