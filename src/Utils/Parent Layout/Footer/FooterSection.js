// import React, { useState } from 'react'
import assetIcons from "../../../Assets/icons/Icons";
import FooterCard from "../../../Components/FooterCard";
import { styles } from "../../styles/styles";

const FooterSection = () => {
  // const [isHover, setIsHover] =useState(false)
  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // }
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // }
  return (
    <div>
      <div className=" flex flex-col items-center overflow-hidden">
        <div className="flex items-center max-w-[1440px] w-[90%] mx-auto">
          <div className="flex flex-col gap-2 justify-start  w-1/5 ">
            <div
              className="flex flex-col pt-2 2xl:text-[1rem] xl:text-[0.8rem] lg:text-[0.7rem] text-[0.6rem]"
              style={styles.footerPara}
            >
              <p style={styles.footerhead}>Follow us</p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/maqware/"
                target="blank"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white "
                style={styles.footerCircle}
              >
                <img
                  src={assetIcons.FacebookIcon}
                  alt="Facebook-Icon"
                  className="h-4 lg:h-5"
                />
              </a>
              <a
                href="https://pk.linkedin.com/company/maqware-solutions"
                target="blank"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white "
                style={styles.footerCircle}
              >
                <img
                  src={assetIcons.LinkedInIcon}
                  alt="LinkenIn-Icon"
                  className="-ml-[0.18rem] lg:-ml-[0.1rem] rounded-full"
                />
              </a>
              <a
                href="https://www.instagram.com/maqwaresolutions/?hl=en"
                target="blank"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center  hover:bg-primary hover:text-white "
                style={styles.footerCircle}
              >
                <img
                  src={assetIcons.InstagramIcon}
                  alt="Instagram-Icon"
                  className="h-3 w-fit lg:h-4 object-fill"
                />
              </a>
            </div>
          </div>

          <div className="w-2/5"></div>

          <div className="w-2/5 flex justify-end ">
            <FooterCard
              Heading={"Head Office"}
              address={"Office 4, Floor 3, MM Alam Road, Lahore, Pakistan"}
              PhoneNumber={"042 36407373"}
              CallIcon={assetIcons.CallIcon}
              Image={assetIcons.PakIcon}
            />
          </div>
        </div>

        <div
          className="flex max-w-[1440px] w-[90%] mx-auto items-center justify-between mt-5 mb-3 xl:text-[0.7rem] lg:text-[0.7rem] text-[0.58rem] 2xl:text-[0.8rem] "
          style={styles.footerPara}
        >
          <p> &#169; 2023- Maqware Solutions | All Rights Reserved</p>
          <div className="flex gap-2 justify-start 2xl:mr-[10.5rem] mr-20 lg:mr-[5.5rem] xl:mr-32">
            <p>Privacy Policy</p>
            <p>|</p>
            <p> Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
