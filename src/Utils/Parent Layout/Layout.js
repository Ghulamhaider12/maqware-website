import React, { useState, useEffect } from "react";
import assetIcons from "../../Assets/icons/Icons";
import Button from "../../Components/Button";
import { styles } from "../styles/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import FooterSection from "./Footer/FooterSection";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [careerPage, setCareerPage] = useState(false);
  // const [bgImage, setBgImage] = useState(assetIcons.maqwareIcon);
  const scrollTo = () => {
    let element = document.getElementById("contactSection");
    element.scrollIntoView({ behavior: "smooth" });
  };
  // window.addEventListener("wheel", (e) => {
  //   if (e.deltaY === 0) {
  //     setBgImage(assetIcons.maqwareIcon);
  //   } else {
  //     setBgImage(assetIcons.maqwareloge);
  //   }
  // });

  useEffect(() => {
    if (pathname?.includes("Careers")) {
      setCareerPage(true);
    } else {
      setCareerPage(false);
    }
  });

  return (
    <div className="main-container">
      {/* NavBar Section */}
      <div className="bg-black sticky top-0 z-50 h-20 ">
        <div
          className="flex items-center h-full justify-evenly max-w-[1440px] w-[90%] mx-auto"
          style={styles.mainbg}
        >
          <div className="w-2/12 h-full flex items-center justify-start ">
            <Link to="/">
              {" "}
              <div className="flex items-center mt-1 2xl:w-[160px] lg:w-[130px] w-[100px] xl:w-[140px] xl:h-[35px] 2xl:h-[40px] lg:h-[30px] h-[25px]">
                <img
                  src={assetIcons.maqwareloge}
                  alt="maqwareIcon"
                  className="h-full w-full"
                />
              </div>
            </Link>
          </div>

          <div
            className="w-8/12 flex justify-center gap-8 text-xs lg:text-sm xl:text-base items-center"
            style={styles.navbar_links}
          >
            <NavLink className="text-white" to="/">
              <span className="cursor-pointer hover:text-primary duration-150">
                Home
              </span>
            </NavLink>
            <NavLink to="/AboutUs" className="text-white">
              <span className="cursor-pointer  hover:text-primary duration-150">
                About Us
              </span>
            </NavLink>
            <NavLink to="/Portfolio" className="text-white">
              <span className="cursor-pointer hover:text-primary duration-150">
                Portfolio{" "}
              </span>
            </NavLink>
            <NavLink to="/Services" className="text-white">
              <span className="cursor-pointerhover:text-primary duration-150">
                Services
              </span>
            </NavLink>
            <NavLink to="/Careers" className="text-white">
              <span className="cursor-pointerhover:text-primary duration-150">
                Careers{" "}
              </span>
            </NavLink>
            <NavLink to="/Blogs" className="text-white">
              <span className="cursor-pointerhover:text-primary duration-150">
                Blogs
              </span>
            </NavLink>
          </div>

          <div className="w-2/12  flex justify-end ">
            {!careerPage ? (
              <Button
                title="Let's Build"
                fontSize={
                  "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[12px]"
                }
                height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[35px]"}
                width={"2xl:w-[150px] lg:w-[135px] md:w-[110px] xl:w-[140px]"}
                onClick={scrollTo}
              />
            ) : (
              <Button
                title="Apply Now "
                fontSize={
                  "xl:text-[14px] lg:text-[12px] 2xl:text-[16px] md:text-[12px]"
                }
                height={"xl:h-[42px] 2xl:h-10 lg:h-[40px] md:h-[35px]"}
                width={"2xl:w-[150px] lg:w-[135px] md:w-[110px] xl:w-[140px]"}
                onClick={scrollTo}
              />
            )}
          </div>
        </div>
      </div>

      {/* Screen View */}
      {/* put overflow-x-hidden when make the new screen */}
      <div className=" relative">
        {children}
        <div
          style={styles.mainbg}
          className="mt-12 2xl:mt-16 border-t-[#262626] border-t-[0.5px]"
        >
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Layout;
