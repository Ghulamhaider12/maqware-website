import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Screens/About Us/AboutUs";
import Blogs from "../Screens/Blogs/Blogs";
import AppDevelopment from "../Screens/ExpertiseScreen/AppDevelopment/AppDevelopment";
import DigitalMarketing from "../Screens/ExpertiseScreen/DigitalMarketing/DigitalMarketing";
import ExpertiseScreen from "../Screens/ExpertiseScreen/ExpertiseScreen";
import GameDevelopment from "../Screens/ExpertiseScreen/GameDevelopment/GameDevelopment";
import Careers from "../Screens/Careers/Careers";
import Main from "../Screens/Home/Main/Main";
import Portfolio from "../Screens/Porfolio/Portfolio";
import Services from "../Screens/Services/Services";
import Layout from "../Utils/Parent Layout/Layout";
import WebDevelopment from "../Screens/WebDevelopment/WebDevelopment";
import CloudComputing from "../Screens/ExpertiseScreen/CloudComputing/CloudComputing";
import BlockChain from "../Screens/ExpertiseScreen/BlockChain/BlockChain";
import SEOServices from "../Screens/SEOServices/SEOServices";
import PageNotFound from "../Screens/404Pge/404Page";
import UiUxDesign from "../Screens/UiUxDesign/UiUxDesign";
import GraphicDesign from "../Screens/GraphicDesign/GraphicDesign";
import StatusNow from "../Screens/Porfolio/StatusNow/StatusNow";
import PikeyCoffee from "../Screens/Porfolio/PikeyCoffee/PikeyCoffee";
import LuxeLocker from "../Screens/Porfolio/LuxeLocker/LuxeLocker";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Main />{" "}
            </Layout>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <Layout>
              {" "}
              <AboutUs />{" "}
            </Layout>
          }
        />
        <Route
          path="/Careers"
          element={
            <Layout>
              {" "}
              <Careers />{" "}
            </Layout>
          }
        />
        <Route
          path="/Services"
          element={
            <Layout>
              {" "}
              <Services />{" "}
            </Layout>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <Layout>
              {" "}
              <Portfolio />{" "}
            </Layout>
          }
        />
        <Route
          path="/StatusNow"
          element={
            <Layout>
              {" "}
              <StatusNow />{" "}
            </Layout>
          }
        />
        <Route
          path="/PikeyCoffee"
          element={
            <Layout>
              {" "}
              <PikeyCoffee />{" "}
            </Layout>
          }
        />
        <Route
          path="/luxe-locker"
          element={
            <Layout>
              {" "}
              <LuxeLocker />{" "}
            </Layout>
          }
        />
        <Route
          path="/Blogs"
          element={
            <Layout>
              {" "}
              <Blogs />{" "}
            </Layout>
          }
        />
        <Route
          path="/ExpertiseScreen"
          element={
            <Layout>
              {" "}
              <ExpertiseScreen />{" "}
            </Layout>
          }
        />
        <Route
          path="/app-development"
          element={
            <Layout>
              {" "}
              <AppDevelopment />{" "}
            </Layout>
          }
        />
        <Route
          path="/digital-marketing"
          element={
            <Layout>
              {" "}
              <DigitalMarketing />{" "}
            </Layout>
          }
        />
        <Route
          path="/game-development"
          element={
            <Layout>
              {" "}
              <GameDevelopment />{" "}
            </Layout>
          }
        />
        <Route
          path="/web-development"
          element={
            <Layout>
              {" "}
              <WebDevelopment />{" "}
            </Layout>
          }
        />
        <Route
          path="/seo-services"
          element={
            <Layout>
              {" "}
              <SEOServices />{" "}
            </Layout>
          }
        />
        <Route
          path="/cloud-computing"
          element={
            <Layout>
              {" "}
              <CloudComputing />{" "}
            </Layout>
          }
        />
        <Route
          path="/Blockchain-Development"
          element={
            <Layout>
              {" "}
              <BlockChain />{" "}
            </Layout>
          }
        />
        <Route
          path="/uiux-design"
          element={
            <Layout>
              {" "}
              <UiUxDesign />{" "}
            </Layout>
          }
        />
        <Route
          path="graphic-design"
          element={
            <Layout>
              <GraphicDesign />
            </Layout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
