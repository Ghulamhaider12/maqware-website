import React from "react";
import assetImages from "../../../../Assets/images/image";
import DoubleTextWithImg from "../../../../Components/DoubleTextWithImg";

const UserFriendly = () => {
  return (
    <div className="">
      <div>
        <DoubleTextWithImg
          title1="User-friendly Mobile Apps,"
          title2=" leveraging Smartphone’s capabilities"
          desc1="We develop high-performing,"
          desc2="scalable Mobile Apps."
          img={assetImages.app}
        />
      </div>
      <div className="max-w-[1440px] w-[90%] mx-auto text-[#BCBCBC] font-[400] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2.2rem]">
        <p>
          Our mobile app developers are seasoned experts in custom mobile app
          development. Their dexterity ranges from retail to healthcare, fleet
          management, hospitality, and marketplace solutions. We employ the
          latest smartphone technology to design unique applications that are
          high-performing, adaptive, user-friendly, and readily navigable. This
          culminates in a memorable end-user experience to spur your brand’s
          growth.
        </p>
      </div>
    </div>
  );
};

export default UserFriendly;
