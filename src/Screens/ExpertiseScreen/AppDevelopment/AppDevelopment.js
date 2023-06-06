import React from "react";
import ContactSection from "../../Home/ContactSection/ContactSection";
import AppDevProcess from "./DevelopAndDeliver/AppDevProcess";
import UserFriendly from "./UserFriendly/UserFriendly";

const AppDevelopment = () => {
  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      <UserFriendly />
      <AppDevProcess />
      <ContactSection />
    </div>
  );
};

export default AppDevelopment;
