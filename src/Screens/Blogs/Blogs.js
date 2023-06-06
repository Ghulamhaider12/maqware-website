import React from "react";
import ContactSection from "../Home/ContactSection/ContactSection";
import AllPostSection from "./AllPostSection/AllPostSection";
import InnovativeSection from "./InnovativeSection/InnovativeSection";
import TrendingBlogsSection from "./TrendingBlogsSection/TrendingBlogsSection";

const Blogs = () => {
  return (
    <div className="overflow-x-hidden">
      <InnovativeSection />
      <AllPostSection />
      <TrendingBlogsSection />
      <ContactSection />
    </div>
  );
};

export default Blogs;
