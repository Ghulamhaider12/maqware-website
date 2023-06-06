import React, { useState } from "react";
import Modal from "../../../Components/Modal/Modal";
import { AnimationTag } from "../../../Components/Text";
import OpenVacancyComp from "./OpenVacancyComp";
import VacancyModal from "./VacancyModal/VacancyModal";

const OpenVacancy = () => {
  const [mernModal, setMernModal] = useState(false);

  return (
    <div className="flex flex-col gap-5 max-w-[1440px] w-[90%] mx-auto">
      <div className="py-10">
        <AnimationTag>Open Vacancies</AnimationTag>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <OpenVacancyComp
          jobHeading={"MERN Stack Developer"}
          experience={"1-3 Years Experience"}
          onOpen={() => setMernModal(true)}
        />
        <OpenVacancyComp
          jobHeading={"Assistant Graphics Designer"}
          experience={"6+ Months Experience"}
        />
        <OpenVacancyComp
          jobHeading={"Python Developer"}
          experience={"2+ Years Experience"}
        />
      </div>

      {mernModal && (
        <Modal
          onClose={() => setMernModal(false)}
          title="MERN Stack Developer"
          children={
            <div>
              <VacancyModal />
            </div>
          }
        />
      )}
    </div>
  );
};

export default OpenVacancy;
