import React from "react";
import Projects from "../../../Components/Projects";
import { styles } from "../../../Utils/styles/styles";

const ProjectsSection = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[90%] mx-auto">
        {/* Text */}
        <div
          className="ml-2 mt-[20px]  flex flex-col items-start lg:text-[35px] xl:text-[38px] 2xl:text-[40px]"
          style={styles.maintext}
        >
          <div
            style={styles.maintext}
            className="2xl:text-[40px] xl:text-[36px] text-[32px]"
          >
            <p>Work that</p>
            <p className="ml-28">
              makes a difference <span className="text-primary">|</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Projects rightAlign={true} />
        <Projects rightAlign={false} />
        <Projects ShiftERP={true} />
      </div>
    </>
  );
};

export default ProjectsSection;
